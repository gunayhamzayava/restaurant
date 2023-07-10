import { Routes, Route } from "react-router-dom";
import Blog from "../components/Blog";
import Community from "../components/Community";
import Company from "../components/Company";
import Culture from "../components/Culture";
import Technology from "../components/Technology";
import WhoWeAre from "../components/WhoWeAre";
import Contact from "../components/Contact";
import Feedback from "../components/FeedBack";
import Article from "../components/Article";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/community" element={<Community />} />
        <Route path="/company" element={<Company />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:id" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
