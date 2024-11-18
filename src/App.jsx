import "./App.css";
import TopNav from "./components/TopNav";
import Banner from "./components/Banner/Banner";
import Features from "./components/Features/Features";
import Projects from "./components/Projects/Projects";
import Timeline from "./components/Timeline/Timeline";
import Testimonials from "./components/Testimonials/Testimonials";
import Skills from "./components/Skills/Skills";
import Accolades from "./components/Accolades/Accolades";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="w-full min-h-screen bg-hero bg-cover bg-center text-lightText">
      <TopNav />
      <div className="max-w-screen-xl mx-auto">
        <div className="bg-white bg-opacity-60 rounded-lg p-6 shadow-md">
          <Banner />
          <Features />
          <Skills />
          <Projects />
          <Testimonials />
          <Timeline />
          <Accolades />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
