import React from 'react'
import { ArrowRight } from 'lucide-react';
function AboutUs() {
    return (
        <>
        <div className='relative min-h-screen overflow-hidden container mx-auto px-4 py-2 '>
        <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
                        UX UI DESIGNING
                        <br />
                        & DEVELOPMENT
                    </h1>
                    <p className="text-black text-lg mb-8 max-w-lg">
                        We are a creative agency specializing in user experience design and development.
                        Our team of experts delivers innovative solutions that drive results.
                        We are a creative agency specializing in user experience design and development.
                        Our team of experts delivers innovative solutions that drive results.
                    </p>
                    <button className="text-white bg-purple-600 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-opacity-90 transition-colors">
                        Get Started
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>

                <div className="relative">
                    <div className="relative z-10">
                        <img
                            src="img.png"
                            alt="Laptop mockup"
                            className="w-full rounded-lg "
                        />
                    </div>
                    
                </div>
            </div>
        </div>
           
        </>
    )
}

export default AboutUs