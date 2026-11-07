export default function Home() {
  const env = process.env.RAILWAY_ENVIRONMENT_NAME ?? "local";
  return (
    <main style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>Ticketing Maker: deploy test</h1>
      <p>Environment: <strong>{env}</strong></p>
    </main>
  );
}