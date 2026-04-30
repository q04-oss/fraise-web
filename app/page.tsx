import SearchForm from "./search/SearchForm";

export const metadata = {
  title: "box fraise",
  description:
    "Security-first infrastructure for local commerce, cooperative ownership, and decentralised networks.",
};

export default function Home() {
  return (
    <main className="page page-centered">
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "2.5rem" }}>

        <header>
          <h1>box fraise</h1>
          <p className="meta" style={{ marginTop: "0.75rem", maxWidth: "46ch", lineHeight: 1.6 }}>
            Security-first infrastructure for local commerce,
            cooperative ownership, and decentralised networks.
          </p>
        </header>

        <SearchForm />

        <nav aria-label="Main">
          <ul className="nav-list">
            <li>
              <a className="btn btn-primary" href="https://testflight.apple.com/join/zJG1Wc5Y">
                Download beta
              </a>
            </li>
            <li><a className="btn btn-secondary" href="/security">Security</a></li>
            <li><a className="btn btn-secondary" href="/paper">Working paper</a></li>
            <li><a className="btn btn-secondary" href="/support">Support</a></li>
          </ul>
        </nav>

      </div>

      <footer className="meta" style={{ paddingTop: "3rem" }}>
        fraise.box &mdash; 2026
      </footer>
    </main>
  );
}
