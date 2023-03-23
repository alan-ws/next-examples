export default function Home() {
  return (
    <main>
      <h1>This is general {process.env.NEXT_PUBLIC_VERCEL_ENV}</h1>
      <h2>proven by the following env var: {process.env.NEXT_PUBLIC_PROD}</h2>
    </main>
  );
}
