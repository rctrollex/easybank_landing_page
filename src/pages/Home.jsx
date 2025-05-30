import React from 'react'
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import WhyUs from "../components/WhyUs.jsx";

const Home = () => {
    return (
        <div className="min-h-screen mx-auto font-sans bg-gray-100 relative max-w-full">
            <Navbar/>
            <Hero/>
            <WhyUs/>
        </div>
    )
}
export default Home
