import React from 'react'
import background from '../assets/bg-intro-desktop.svg'
import mobilebg from '../assets/bg-intro-mobile.svg'
import mobiles from '../assets/image-mockups.png'
const Hero = () => {
    return (
        <section className="pt-16 pb-30">
            <div className="container mx-auto px-4">
                <img src={mobilebg} alt="background" className="block sm:hidden absolute top-0 left-0 w-[700px] bg-fixed"/>
                <div className="flex justify-end container items- w-full md:w-1/2">
                    <img src={background} alt="background" className="block sm:hidden  md:block absolute top-0 right-0 w-[840px] bg-fixed poi"/>
                    <img
                        src={mobiles}
                        className="absolute top-[-90px] md:top-10 right-0 w-[400px] md:w-[500px] lg:w-[600px] pointer-events-none "
                        alt="Phones"
                    />
                </div>
            </div>

            <div className="container mx-auto px-4 pt-90 md:py-25">
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
