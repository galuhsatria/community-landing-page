import "./App.css";
import Event from "./components/Event";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Team from "./components/Team";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="mt-48 mb-16 layout" id="event">
          <h1 className="md:text-[2.5rem] text-3xl font-bold mb-10 ">Upcoming events</h1>
          <Event />
        </div>
        <div className="mb-16 layout" id="team">
          <h1 className="md:text-[2.5rem] text-3xl font-bold mb-10">Meet Our Team</h1>
          <Team />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
