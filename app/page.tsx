import BMICalculator from "./components/BMI"; 
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Home";
import Service from "./components/Service";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />  
      <About/>
      <Service/>
      <BMICalculator/>
      <Contact/>
    </main>
  );
}