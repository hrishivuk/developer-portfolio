// Explicit data choices drive presentation; supporting evidence is never discarded.
export function getProjectPresentation(project) {
  const unique = (items = []) => [...new Set(items.filter(Boolean))];
  const study = project.caseStudy || {};
  const decisions = unique([
    ...(study.designDecisions || []),
    ...(study.engineeringDecisions || []),
    ...(study.handoffDecisions || []),
  ]);
  const supportingDecisions = unique(study.productThinking).filter(item => !decisions.includes(item));
  const contributions = Object.entries(project.contributions || {
    Contribution: project.responsibilities || [],
  }).map(([label, items]) => [label, unique(items)]).filter(([, items]) => items.length);
  const allImages = project.screenshots || [];
  const screenshots = project.galleryOrder
    ? project.galleryOrder.map(src => allImages.find(shot => shot.src === src)).filter(Boolean)
    : allImages;
  const supportingImages = allImages.filter(shot => !screenshots.some(selected => selected.src === shot.src));
  const sectionKeys = ['context'];
  if (contributions.length) sectionKeys.push('contribution');
  if (study.research?.length) sectionKeys.push('research');
  if (study.flow?.length) sectionKeys.push('flow');
  if (decisions.length || supportingDecisions.length) sectionKeys.push('decisions');
  if (allImages.length) sectionKeys.push('gallery');
  if (study.testing?.length) sectionKeys.push('testing');
  if (study.outcome || study.reflection || study.limitations || project.summary) sectionKeys.push('outcome');
  const sectionNumber = key => String(sectionKeys.indexOf(key) + 1).padStart(2, '0');
  return { contributions, decisions, supportingDecisions, screenshots, supportingImages, sectionNumber };
}
