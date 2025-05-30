import React from 'react'
import money from '../assets/image-currency.jpg'
import restaurant from '../assets/image-restaurant.jpg'
import plane from '../assets/image-plane.jpg'
import confetti from '../assets/image-confetti.jpg'
const LatestArticles = () => {
    return (
        <div className="pt-24 pb-24 bg-gray-100">
            <div className="container mx-auto px-4 text-center md:text-start">
                <h2 className="text-3xl mb-2 p-4">Latest Articles</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto px-2 pt-4">
                <div className="flex flex-col h-full p-4">
                    <div className="container flex justify-center md:justify-start">
                        <img src = {money} alt="Receive money" className="w-full h-full md:w-150 md:h-70 rounded-xl"/>
                    </div>

                    <div className="px-4 py-6">
                        <h6 className="text-gray-500 text-xs">By Claire Robinson</h6>
                        <h3 className="mt-4 text-xl hover:text-green-400 cursor-pointer">Receive money in any currency with no fees</h3>
                        <p className="text-gray-500 text-base pt-4">The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...<span className="text-green-400 cursor-pointer">Read More</span></p>
                    </div>
                </div>

                <div className="flex flex-col h-full p-4">
                    <div className="container flex justify-center md:justify-start">
                        <img src = {restaurant} alt="Restaurant" className="w-full h-full md:w-150 md:h-70 rounded-xl"/>
                    </div>

                    <div className="px-4 py-6">
                        <h6 className="text-gray-500 text-xs">By Wilson Hutton</h6>
                        <h3 className="mt-4 text-xl hover:text-green-400 cursor-pointer">Treat yourself without worrying about money</h3>
                        <p className="text-gray-500 text-base pt-4">Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...<span className="text-green-400 cursor-pointer">Read More</span></p>
                    </div>
                </div>

                <div className="flex flex-col h-full p-4">
                    <div className="container flex justify-center md:justify-start">
                        <img src = {plane} alt="Plane" className="w-full h-full md:w-150 md:h-70 rounded-xl"/>
                    </div>

                    <div className="px-4 py-6">
                        <h6 className="text-gray-500 text-xs">By Wilson Hutton</h6>
                        <h3 className="mt-4 text-xl hover:text-green-400 cursor-pointer">Take your Easybank card wherever you go</h3>
                        <p className="text-gray-500 text-base pt-4">We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ...<span className="text-green-400 cursor-pointer">Read More</span></p>
                    </div>
                </div>

                <div className="flex flex-col h-full p-4">
                    <div className="container flex justify-center md:justify-start">
                        <img src = {confetti} alt="Confetii" className="w-full h-full md:w-150 md:h-70 rounded-xl"/>
                    </div>

                    <div className="px-4 py-6">
                        <h6 className="text-gray-500 text-xs">By Claire Robinson</h6>
                        <h3 className="mt-4 text-xl hover:text-green-400 cursor-pointer">Our invite-only Beta accounts are now live</h3>
                        <p className="text-gray-500 text-base pt-4">After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...<span className="text-green-400 cursor-pointer">Read More</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LatestArticles
