import Header from "./components/Header";
import Hero from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import BMICalculator from "./components/BMI";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />  
      <About/>
      <Service/>
      <BMICalculator/>
      <Contact/>
      <Footer/>
    </main>
  );
}