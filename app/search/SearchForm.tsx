"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

const INTERNAL_ROUTES: Record<string, string> = {
  paper:    "/paper",
  shop:     "/shop",
  support:  "/support",
  security: "/security",
  whisked:  "/whisked",
  beta:     "https://testflight.apple.com/join/zJG1Wc5Y",
};

export default function SearchForm({ initialQuery = "" }: { initialQuery?: string }) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const q = inputRef.current?.value.trim() ?? "";
    if (!q) return;

    const lower = q.toLowerCase().replace(/^\//, "");
    if (INTERNAL_ROUTES[lower]) {
      window.location.href = INTERNAL_ROUTES[lower];
      return;
    }

    router.push(`/search?q=${encodeURIComponent(q)}`);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit} autoComplete="off">
      <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        ref={inputRef}
        className="search-input"
        type="text"
        name="q"
        placeholder="search privately. for better taste."
        defaultValue={initialQuery}
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        aria-label="Search"
      />
    </form>
  );
}
