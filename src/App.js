import Navbar from "./components/navbar/Navbar.js"
import SpanLead from "./components/spanLead/SpanLead.js"
import TopStory from "./components/topStory/TopStory.js"
import TrendingNow from "./components/trendingNow/TrendingNow.js"
import './App.css';
import TopFive from "./components/topFive/TopFive.js";
import Stories from "./components/stories/Stories.js"
import YahooBottom from "./components/yahooBottom/YahooBottom.js"

function App() {
  return (
    <div className="homePage">
      <Navbar />
      <SpanLead />
      <div className="flexLine">
        <TopStory />
      <TrendingNow />
      </div>
      <TopFive />
     <Stories />
     <YahooBottom />
    </div>
  );
}

export default App;
