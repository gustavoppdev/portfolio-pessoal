import About from "./components/About";
import Hero from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <About />
    </main>
  );
};

export default Home;
