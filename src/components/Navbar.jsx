import React, {useState} from 'react'
import logo from '../assets/logo.svg'
import MobileNav from "./MobileNav.jsx";
import open from "../assets/icon-hamburger.svg"
import close from "../assets/icon-close.svg"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="fixed z-10 bg-white w-full">
            <div className="container justify-between flex items-center py-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="">
                    <img src={logo} alt="easybank logo" />
                </div>

                <div className="text-sm sm:text-base space-x-4 text-gray-500 hidden md:flex">
                    <a href="/" className="border-b-4 border-transparent hover:border-green-400 py-3 hover:text-black transition duration-300">Home</a>
                    <a href="#about" className="border-b-4 border-transparent hover:border-green-400 py-3 hover:text-black transition duration-300">About</a>
                    <a href="#contact" className="border-b-4 border-transparent hover:border-green-400 py-3 hover:text-black transition duration-300">Contact</a>
                    <a href="blog" className="border-b-4 border-transparent hover:border-green-400 py-3 hover:text-black transition duration-300">Blog</a>
                    <a href="#careers" className="border-b-4 border-transparent hover:border-green-400 py-3 hover:text-black transition duration-300">Career</a>
                </div>

                    <div className="text-sm sm:text-base text-white hidden md:flex">
                    <button className="bg-gradient-to-r from-green-400 to-blue-300 rounded-2xl py-2 px-4 cursor-pointer shadow-md hover:bg-gradient-to-r hover:from-blue-300 hover:to-green-400 transition">Request Invite</button>
                </div>

                <div className="md:hidden px-2">
                    <button className="text-gray-500 hover:text-white focus:outline-none" onClick={()=>setIsOpen(!isOpen)}>
                        {isOpen ? <img src={close} alt="close icon"/> : <img src={open} alt="open icon"/>}
                    </button>
                </div>
            </div>
            <MobileNav isOpen={isOpen} setIsOpen={setIsOpen}/>
        </nav>
    )
}
export default Navbar
