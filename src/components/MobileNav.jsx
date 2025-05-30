import React from 'react'
import close from "../assets/icon-close.svg"

const MobileNav = ({isOpen, setIsOpen}) => {
    return (
        <div
            className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100': 'opacity-0 pointer-events-none'}`}
            onClick={()=>setIsOpen(false)}>

            <div
                className="bg-white p-6 rounded-md shadow-md text-center w-5/6 mx-auto mt-16"
                onClick={(e)=>e.stopPropagation()}>

                <button className="absolute top-4 right-4 text-gray-500 hover:text-black" onClick={()=>setIsOpen(false)}>
                    <img src={close} alt="close" />
                </button>

                <ul className="space-y-4 text-gray-500">
                    <li><a href="/" onClick={()=> setIsOpen(false)}>Home</a></li>
                    <li><a href="#about" onClick={()=> setIsOpen(false)}>About</a></li>
                    <li><a href="#contact" onClick={()=> setIsOpen(false)}>Contact</a></li>
                    <li><a href="#blog" onClick={()=> setIsOpen(false)}>Blog</a></li>
                    <li><a href="#careers" onClick={()=> setIsOpen(false)}>Careers</a></li>
                </ul>
            </div>

        </div>
    )
}
export default MobileNav