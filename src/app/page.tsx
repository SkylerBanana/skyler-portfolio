import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
export default function Home() {
  return (
    <main className="h-dvh w-dvw">
      <Nav />
      <Hero />
      <Work />
    </main>
  );
}
