import React from 'react'
import banking from '../assets/icon-online.svg'
import budgeting from '../assets/icon-budgeting.svg'
import onBoarding from '../assets/icon-onboarding.svg'
import openApi from '../assets/icon-api.svg'

const WhyUs = () => {
    return (
        <div className="pt-24 pb-16 bg-gray-200">
            <div className="container mx-auto px-4 text-center md:text-start">
                <h2 className="text-3xl mb-2 p-4">Why choose Easybank?</h2>
                <p className="text-gray-500 text-lg md:text-base w-full md:w-xl p-4">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto px-4 pt-16">
                <div className="flex flex-col h-full p-4 text-center md:text-start">
                    <div className="container flex justify-center md:justify-start">
                        <img src = {banking} alt="Online Banking" className="w-18 h-18"/>
                    </div>
                    <h3 className="mt-10 text-2xl">Online Banking</h3>
                    <p className="text-gray-500 text-base sm:text-base  pt-4">Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                </div>

                <div className="flex flex-col h-full p-4 text-center md:text-start">
                    <div className="container flex justify-center md:justify-start">
                        <img src = {budgeting} alt="Budgeting" className="w-18 h-18"/>
                    </div>
                    <h3 className="mt-10 text-2xl">Simple Budgeting</h3>
                    <p className="text-gray-500 text-base sm:text-base pt-4 ">See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.</p>
                </div>

                <div className="flex flex-col h-full p-4 text-center md:text-start">
                    <div className="container flex justify-center md:justify-start">
                        <img src = {onBoarding} alt="Fast Onboarding" className="w-18 h-18"/>
                    </div>
                    <h3 className="mt-10 text-2xl">Fast Onboarding</h3>
                    <p className="text-gray-500 text-base sm:text-base pt-4">We don't do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                </div>

                <div className="flex flex-col h-full p-4 text-center md:text-start">
                    <div className="container flex justify-center md:justify-start">
                        <img src={openApi} alt="Open API" className="w-18 h-18"/>
                    </div>
                    <h3 className="mt-10 text-2xl">Open API</h3>
                    <p className="text-gray-500 text-base sm:text-base pt-4">Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                </div>


            </div>
        </div>
    )
}
export default WhyUs
