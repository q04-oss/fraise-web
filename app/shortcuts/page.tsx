export const metadata = {
  title: "box fraise — Shortcuts",
  description: "Search bar shortcuts for fraise.box.",
};

const SHORTCUTS = [
  { command: "paper",     destination: "/paper",          description: "Working Paper No. 1" },
  { command: "security",  destination: "/security",       description: "Security architecture" },
  { command: "privacy",   destination: "/privacy",        description: "Privacy policy" },
  { command: "support",   destination: "/support",        description: "Support" },
  { command: "shop",      destination: "/shop",           description: "Stickers" },
  { command: "whisked",   destination: "/whisked",        description: "Whisked — matcha loyalty" },
  { command: "kommune",   destination: "/kommune",        description: "Kommune" },
  { command: "shortcuts", destination: "/shortcuts",      description: "This page" },
  { command: "beta",      destination: "testflight",      description: "Download the app (TestFlight)" },
];

export default function ShortcutsPage() {
  return (
    <main className="page">
      <div className="doc-header">
        <a className="back-link" href="/">← box fraise</a>
        <h1>Shortcuts</h1>
        <p className="meta" style={{ marginTop: "0.75rem" }}>
          Type any of these directly into the search bar.
          Works with or without a leading <code style={{ fontSize: "0.75rem" }}>/</code>.
        </p>
      </div>

      <ul className="property-list">
        {SHORTCUTS.map((s) => (
          <li key={s.command}>
            <span className="property-key">
              <code style={{ fontSize: "0.8125rem", fontFamily: "\"SF Mono\", \"Fira Code\", Consolas, monospace" }}>
                {s.command}
              </code>
            </span>
            <p className="property-value">{s.description}</p>
          </li>
        ))}
      </ul>

      <footer className="doc-footer">
        <p className="meta">box fraise &mdash; fraise.box &mdash; 2026</p>
      </footer>
    </main>
  );
}
