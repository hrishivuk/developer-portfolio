"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

const interactiveSelector = [
  "a",
  "button",
  "input",
  "textarea",
  "select",
  "summary",
  "[role='button']",
].join(",");

export default function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(-60);
  const pointerY = useMotionValue(-60);
  const ringX = useSpring(pointerX, { stiffness: 360, damping: 28, mass: 0.45 });
  const ringY = useSpring(pointerY, { stiffness: 360, damping: 28, mass: 0.45 });
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [pressed, setPressed] = useState(false);
  const visibleRef = useRef(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(finePointer.matches && !reduceMotion);

    update();
    finePointer.addEventListener("change", update);
    return () => finePointer.removeEventListener("change", update);
  }, [reduceMotion]);

  useEffect(() => {
    if (!enabled) return undefined;

    document.documentElement.classList.add("has-custom-cursor");

    function move(event) {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
      setInteractive(Boolean(event.target.closest(interactiveSelector)));

      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }
    }

    function hide() {
      visibleRef.current = false;
      setVisible(false);
      setPressed(false);
    }

    function press() {
      setPressed(true);
    }

    function release() {
      setPressed(false);
    }

    window.addEventListener("pointermove", move);
    document.documentElement.addEventListener("mouseleave", hide);
    window.addEventListener("pointerdown", press);
    window.addEventListener("pointerup", release);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", hide);
      window.removeEventListener("pointerdown", press);
      window.removeEventListener("pointerup", release);
    };
  }, [enabled, pointerX, pointerY]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[200]" aria-hidden>
      <motion.span
        className="custom-cursor-ring"
        style={{ x: ringX, y: ringY }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: pressed ? 0.82 : interactive ? 1.22 : 1,
        }}
        transition={{ duration: 0.16 }}
      />
      <motion.span
        className="custom-cursor-dot"
        style={{ x: ringX, y: ringY }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.12 }}
      />
      <motion.svg
        className="custom-cursor-pointer"
        style={{ x: pointerX, y: pointerY }}
        viewBox="0 0 24 28"
        animate={{
          opacity: visible ? 1 : 0,
          scale: pressed ? 0.86 : 1,
        }}
        transition={{ duration: 0.12 }}
      >
        <path d="M2 2.6v20.1c0 1.4 1.7 2 2.6.9l4.1-5 6.1 5.8a1.6 1.6 0 0 0 2.3-.1l2-2.2a1.6 1.6 0 0 0-.1-2.3l-6-5.6 6.2-2.5c1.3-.5 1.3-2.4 0-2.9L4.1 1.2A1.5 1.5 0 0 0 2 2.6Z" />
      </motion.svg>
    </div>
  );
}
