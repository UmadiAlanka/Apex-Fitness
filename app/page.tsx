import About from "./components/About";
import Header from "./components/Hero";
import Hero from "./components/Home";
import Service from "./components/Service";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />  
      <About/>
      <Service/>
    </main>
  );
}