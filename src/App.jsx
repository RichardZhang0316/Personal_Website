import TopBar from "./components/topBar/TopBar";
import Intro from "./components/intro/Intro";
import Blog from "./components/blog/Blog";
import Works from "./components/works/Works";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";

function App() {
  const [menuOpen,setMenuOpen]=useState(false);
  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Blog/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
