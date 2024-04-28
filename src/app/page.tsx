import Nav from "./components/Nav";
import Hero from "./components/Hero";
export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      <div className="flex justify-center">
        <p className="text-4xl">GoodBye World</p>
      </div>
    </>
  );
}
