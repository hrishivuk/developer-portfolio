import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { projects, getFeaturedProjects, getSortedProjects, projectGroups } from '../src/data/projects.js';
import { getProjectPresentation } from '../src/lib/projectPresentation.js';
import { navigationSections } from '../src/data/navigation.js';

test('featured order, archive groups and IDs remain intentional', () => {
  assert.deepEqual(getFeaturedProjects().map(p=>p.id), ['brightspace-learning-experience','flyh-ai','coach-canvas','findaside-football-planner']);
  assert.equal(new Set(projects.map(p=>p.id)).size, projects.length);
  assert.equal(getSortedProjects().length, projects.length);
  for (const project of projects) assert.ok(projectGroups.includes(project.primaryDiscipline));
  assert.ok(navigationSections.some(section => section.id === 'skills'));
});
test('every referenced image and document exists; gallery curation drops no evidence', () => {
  for (const project of projects) {
    const view = getProjectPresentation(project);
    assert.equal(view.screenshots.length + view.supportingImages.length, (project.screenshots || []).length);
    for (const src of project.galleryOrder || []) assert.ok(project.screenshots.some(s=>s.src===src));
    for (const path of [project.image, ...(project.screenshots||[]).map(s=>s.src), ...(project.documentLinks||[]).map(d=>d.href)].filter(Boolean)) {
      assert.ok(fs.existsSync(`public${path}`), path);
    }
    assert.ok(project.status);
    for (const [, items] of view.contributions) assert.ok(items.every(item=>!/^I\b/.test(item)));
  }
});
test('Brightspace prioritises actual Resume Builder screens and retains supporting work', () => {
  const view = getProjectPresentation(projects.find(p=>p.id==='brightspace-learning-experience'));
  assert.ok(view.screenshots[0].src.endsWith('resume-preview.png'));
  assert.ok(view.screenshots[1].src.endsWith('resume-personal-details.png'));
  assert.equal(view.screenshots.length, 8);
  assert.equal(view.supportingImages.length, 7);
});
test('FLYH keeps its hero and four real workflow images without invented links', () => {
  const project=projects.find(p=>p.id==='flyh-ai');
  assert.equal(project.image, '/images/flyh/art.png');
  assert.equal(getProjectPresentation(project).screenshots.length, 4);
  assert.ok(!project.liveUrl && !project.githubUrl);
});
test('decisions are deduplicated and numbering follows rendered sections', () => {
  const view=getProjectPresentation({ summary:'Example', responsibilities:['Built interface','Built interface'], caseStudy:{ designDecisions:['Design'], engineeringDecisions:['Build','Design'], productThinking:['Context','Build'] } });
  assert.deepEqual(view.decisions, ['Design','Build']);
  assert.deepEqual(view.supportingDecisions, ['Context']);
  assert.equal(view.sectionNumber('decisions'), '03');
  assert.equal(view.sectionNumber('outcome'), '04');
  assert.equal(view.contributions[0][1].length, 1);
});
test('corrected project scope does not regress to unsupported release/integration claims', () => {
  const find=projects.find(p=>p.id==='findaside-football-planner');
  assert.equal(find.caseStudy.timeline, '2025');
  assert.ok(!JSON.stringify(find).includes('30+'));
  assert.ok(!JSON.stringify(find).includes('Firestore'));
  const flex=projects.find(p=>p.id==='flexsave-smart-savings');
  assert.equal(flex.status, 'Original university concept · Redesign in progress');
  assert.equal(flex.workInProgress, true);
  assert.ok(!flex.caseStudy.engineeringDecisions);
  assert.ok(!JSON.stringify(projects.find(p=>p.id==='portfolio-v3')).includes('Four WCAG'));
});

 test('case-study onward journeys resolve and Brightspace evidence has sequential sections', () => {
  for (const project of projects) {
    assert.ok(project.deliverable);
    assert.ok(project.nextProjectId !== project.id && projects.some(p => p.id === project.nextProjectId));
  }
  const project=projects.find(p => p.id === 'brightspace-learning-experience');
  const view=getProjectPresentation(project);
  ['context','contribution','research','flow','decisions','gallery','testing','outcome'].forEach((key,index) => assert.equal(view.sectionNumber(key),String(index+1).padStart(2,'0')));
  assert.ok(project.caseStudy.testing.some(item => item.body.includes('not observed task-completion rates')));
  assert.ok(project.caseStudy.testing.some(item => item.body.includes('does not record')));
});

test('FlexSave separates the redesign preview from historical university evidence', () => {
  const project=projects.find(p => p.id === 'flexsave-smart-savings');
  const view=getProjectPresentation(project);
  assert.equal(project.image, '/images/flexsave/flexsave-new.png');
  assert.equal(view.screenshots[0].src, project.image);
  assert.match(view.screenshots[0].alt, /work in progress/i);
  assert.equal(view.screenshots.length, 7);
  assert.ok(view.screenshots.slice(1).every(shot => shot.alt.startsWith('Original university concept')));
  assert.equal(new Set(view.screenshots.map(shot=>shot.src)).size, 7);
  assert.ok(!project.liveUrl && !project.githubUrl);
  assert.ok(!project.caseStudy.testing);
});
