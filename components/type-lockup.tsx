"use client";

import { useEffect, useState } from "react";

const phrases = [
  "video game worlds",
  "books with useful ideas",
  "music production textures",
  "business model patterns",
];

export function TypeLockup() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          const nextText = current.slice(0, typed.length + 1);
          setTyped(nextText);

          if (nextText === current) {
            window.setTimeout(() => setIsDeleting(true), 900);
          }
        } else {
          const nextText = current.slice(0, typed.length - 1);
          setTyped(nextText);

          if (!nextText) {
            setIsDeleting(false);
            setPhraseIndex((phraseIndex + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 34 : 68,
    );

    return () => window.clearTimeout(timeout);
  }, [isDeleting, phraseIndex, typed]);

  return (
    <div className="mt-6 min-h-8 text-lg font-black uppercase tracking-[0.12em] text-black sm:text-xl">
      <span className="text-black/55">currently into </span>
      <span className="type-text">{typed}</span>
      <span className="typing-caret" aria-hidden="true" />
    </div>
  );
}
