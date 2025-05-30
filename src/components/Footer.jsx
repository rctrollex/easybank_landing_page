import React from 'react'
import logo from '../assets/logo.svg'
import facebook from '../assets/icon-facebook.svg'
import youtube from '../assets/icon-youtube.svg'
import twitter from '../assets/icon-twitter.svg'
import pinterest from '../assets/icon-pinterest.svg'
import instagram from '../assets/icon-instagram.svg'

const Footer = () => {
    return (
        <footer className="bg-blue-950 text-white text-base z-10 w-full">
            <div className="container flex md:justify-between justify-center py-8 flex-col md:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:gap-50 ">
                    <div>
                        <div className="block container justify-center md:justify-start flex">
                            <img src = {logo} alt="logo"/>
                        </div>
                        <div className="py-13 space-x-4 flex flex-row container justify-center md:justify-start">
                            <div className="hover:bg-green-500 ">
                                < a href = ""><img src = {facebook} alt="facebook"/></a>
                            </div>
                            <div className="hover:bg-green-500">
                                < a href = ""><img src = {youtube} alt="youtube"/></a>
                            </div>
                            <div>
                                <a href = ""><img src = {twitter} alt="twitter"/></a>
                            </div>
                            <div>
                                <a href = ""><img src = {pinterest} alt="pinterest"/></a>
                            </div>
                            <div>
                                <a href = ""><img src = {instagram} alt="instagram"/></a>
                            </div>
                        </div>
                    </div>

                    <div className="text-white text-base flex flex-col mb-4 space-y-3">
                        <a href="#about" className="hover:text-green-400 transition duration-300">About</a>
                        <a href="#contact" className="hover:text-green-400 transition duration-300">Contact</a>
                        <a href="blog" className="hover:text-green-400 transition duration-300">Blog</a>
                    </div>

                    <div className="text-white text-base flex flex-col mb-4 space-y-3">
                        <a href="#about" className="hover:text-green-400 transition duration-300">Careers</a>
                        <a href="#contact" className="hover:text-green-400 transition duration-300">Support</a>
                        <a href="blog" className="hover:text-green-400 transition duration-300">Privacy Policy</a>
                    </div>
                </div>
                <div>
                    <div className="container flex justify-center md:justify-start mt-4 md:mt-0">
                        <button className="bg-gradient-to-r from-green-400 to-blue-300 rounded-2xl py-2 px-8 cursor-pointer shadow-md hover:bg-gradient-to-r hover:from-blue-300 hover:to-green-400 transition text-white text-sm sm:text-base">Request Invite</button>
                    </div>
                    <div className="text-center md:text-start">
                        <p className="text-sm text-gray-400 pt-10">© Easybank. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer
