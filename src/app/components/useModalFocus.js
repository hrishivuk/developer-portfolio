"use client";

import { useEffect } from "react";

const selector = 'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function useModalFocus(open, containerRef, onClose, initialFocusRef) {
  useEffect(() => {
    const container = containerRef.current;
    if (!open || !container) return undefined;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const changed = [];
    // Make content outside the dialog unavailable to pointer, keyboard and AT.
    let branch = container;
    while (branch.parentElement && branch !== document.body) {
      for (const sibling of branch.parentElement.children) {
        if (sibling !== branch && sibling instanceof HTMLElement && !['SCRIPT', 'STYLE', 'LINK'].includes(sibling.tagName)) {
          changed.push([sibling, sibling.inert]);
          sibling.inert = true;
        }
      }
      branch = branch.parentElement;
    }
    const focusable = () => [...container.querySelectorAll(selector)].filter(node => node.getClientRects().length && !node.closest('[inert]'));
    (initialFocusRef?.current || focusable()[0] || container).focus();
    function keydown(event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
      if (event.key !== 'Tab') return;
      const nodes = focusable();
      if (!nodes.length) { event.preventDefault(); container.focus(); return; }
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && (document.activeElement === first || !container.contains(document.activeElement))) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !container.contains(document.activeElement))) {
        event.preventDefault(); first.focus();
      }
    }
    document.addEventListener('keydown', keydown);
    return () => {
      const restore = container.contains(document.activeElement) || document.activeElement === document.body;
      document.removeEventListener('keydown', keydown);
      changed.forEach(([node, inert]) => { node.inert = inert; });
      document.body.style.overflow = previousOverflow;
      if (restore && previousFocus?.isConnected) previousFocus.focus();
    };
  }, [open, containerRef, onClose, initialFocusRef]);
}
