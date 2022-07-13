import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Gallery from "./components/gallery/Gallery";
import Team from "./components/team/Team";
import { useState, useEffect } from "react";

import SmoothScroll from "smooth-scroll";
import JsonData from "./data/landing-data.json"
import "./app.scss"
import Testimonial from "./components/testimonials/Testimonial";

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});

function App() {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);
    return (
        <div className="app">
            <Navbar/>
            <Header/>
            <Gallery data={landingPageData.Gallery}/>
            <About data={landingPageData.About}/>
            <Testimonial data = {landingPageData.Testimonials}/>
            <Team data={landingPageData.Team}/>
            <Footer data={landingPageData.Contact}/>
        </div>
    );
}

export default App;
