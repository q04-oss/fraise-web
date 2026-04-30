import SearchForm from "./search/SearchForm";

export const metadata = {
  title: "box fraise",
  description:
    "Security-first infrastructure for local commerce, cooperative ownership, and decentralised networks.",
};

export default function Home() {
  return (
    <main className="home">
      <div className="home-inner">

        <header className="home-hero">
          <span className="home-wordmark">box fraise</span>
        </header>

        <SearchForm />

        <nav className="home-chips" aria-label="Quick links">
          <a className="chip" href="https://testflight.apple.com/join/zJG1Wc5Y">beta</a>
        </nav>

      </div>

      <footer className="home-footer">
        <nav className="footer-links" aria-label="Footer">
          <a href="/paper">working paper</a>
          <a href="/security">security</a>
          <a href="/privacy">privacy</a>
          <a href="/support">support</a>
        </nav>
      </footer>
    </main>
  );
}
