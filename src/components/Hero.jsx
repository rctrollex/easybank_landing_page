import React from 'react'
import background from '../assets/bg-intro-desktop.svg'
import mobiles from '../assets/image-mockups.png'
const Hero = () => {
    return (
        <section className="pt-16 pb-16">
            <div className="container mx-auto px-4 p-40">
                <h2 className="text-4xl mb-5 text-center md:w-xs md:text-start">Next generation digital banking</h2>
                <p className="text-gray-500 text-base text-center md:w-sm md:text-start mb-8">
                    Take your financial life online. Your Easybank account will be a one-stop-shop
                    for spending, saving, budgeting, investing, and much more.
                </p>
                <div className="container flex justify-center md:justify-start">
                    <button className="bg-gradient-to-r from-green-400 to-blue-300 rounded-2xl py-3 px-10 cursor-pointer shadow-md hover:bg-gradient-to-r hover:from-blue-300 hover:to-green-400 transition text-white text-sm sm:text-base">Request Invite</button>
                </div>
            </div>
        </section>
    )
}
export default Hero
