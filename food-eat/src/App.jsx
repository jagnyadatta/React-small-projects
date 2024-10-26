import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TopList from "./components/TopList";
import BgImage from "./assets/2.png";
import Banner from "./components/Banner";
import OurService from "./components/OurService";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

function App() {
  return (
    <>
      <div style={bgStyle} className="overflow-x-hidden">
        <div className="min-h-screen bg-white/50 backdrop-blur-3xl">
          <Navbar />
          <Hero />
          <TopList />
          <Banner/>
          <OurService/>
        </div>
      </div>
    </>
  );
}

export default App;
