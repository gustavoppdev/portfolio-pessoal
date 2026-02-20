import About from "./components/About";
import Hero from "./components/Hero";
import { Services } from "./components/Services";

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <About />
    </main>
  );
};

export default Home;
