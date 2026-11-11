import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Solutions from "./components/Solutions.jsx";
import Team from "./components/Team.jsx";
import Projects from "./components/Projects.jsx";
import Process from "./components/Process.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Team />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
