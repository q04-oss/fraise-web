import SearchForm from "./search/SearchForm";

export const metadata = {
  title: "box fraise",
  description:
    "Security-first infrastructure for local commerce, cooperative ownership, and decentralised networks.",
};

const CHIPS = [
  { label: "Download beta", href: "https://testflight.apple.com/join/zJG1Wc5Y" },
  { label: "Security",      href: "/security" },
  { label: "Working paper", href: "/paper" },
  { label: "Support",       href: "/support" },
];

export default function Home() {
  return (
    <main className="home">
      <div className="home-inner">

        <header className="home-hero">
          <span className="home-wordmark">box fraise</span>
        </header>

        <SearchForm />

        <nav className="home-chips" aria-label="Quick links">
          {CHIPS.map((c) => (
            <a key={c.href} className="chip" href={c.href}>
              {c.label}
            </a>
          ))}
        </nav>

      </div>

      <footer className="home-footer meta">
        fraise.box &mdash; 2026
      </footer>
    </main>
  );
}
