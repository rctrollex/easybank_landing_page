import React from 'react'
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import WhyUs from "../components/WhyUs.jsx";
import LatestArticles from "../components/LatestArticles.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
    return (
        <div className="min-h-screen  font-sans bg-gray-100 relative">
            <div className="">

            </div>
            <Navbar/>
            {/* Hero Section - full-width with background */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
                    <Hero />
                </div>
            </section>

            {/* WhyUs Section - background spans full width */}
            <section className="bg-gray-200">
                <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
                    <WhyUs />
                </div>
            </section>

            <section className="bg-gray-100">
                <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
                    <LatestArticles />
                </div>
            </section>

            <Footer/>
        </div>
    )
}
export default Home
