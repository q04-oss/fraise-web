export const metadata = {
  title: "box fraise — stickers",
  description: "Collectible city stickers. Digital and physical.",
};

const STICKERS = [
  {
    title: "Digital Sticker",
    description: "Delivered instantly in-app. Collect locations, send them to friends.",
    price: "3.00",
  },
  {
    title: "Physical Sticker Pack",
    description: "Die-cut vinyl. Weatherproof. Mailed to the recipient.",
    price: "14.00",
  },
  {
    title: "Digital + Physical",
    description: "Both together.",
    price: "16.00",
  },
];

export default function StickersPage() {
  return (
    <main className="page">
      <div className="doc-header">
        <a className="back-link" href="/">← box fraise</a>
        <h1>stickers</h1>
        <p className="meta" style={{ marginTop: "0.75rem" }}>
          Collectible city stickers. Send one to a friend — digital or physical.
        </p>
      </div>

      <hr />

      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" }}>
        {STICKERS.map((s) => (
          <li key={s.title} style={{ borderTop: "1px solid var(--border)", paddingBlock: "2rem" }}>
            <h2 style={{ margin: "0 0 0.5rem" }}>{s.title}</h2>
            <p style={{ color: "var(--muted)", fontStyle: "italic", marginBottom: "0.75rem" }}>
              {s.description}
            </p>
            <p className="meta">CA${s.price}</p>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "2rem" }}>
        <a className="btn btn-primary" href="https://testflight.apple.com/join/zJG1Wc5Y">
          Get the app →
        </a>
      </div>

      <footer className="doc-footer">
        <p className="meta">box fraise &mdash; fraise.box &mdash; 2026</p>
      </footer>
    </main>
  );
}
