import React from 'react'
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";

const Home = () => {
    return (
        <div className="min-h-screen mx-auto font-sans bg-gray-100 relative max-w-full">
            <Navbar/>
            <Hero/>
        </div>
    )
}
export default Home
