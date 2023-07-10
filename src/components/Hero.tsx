import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <section className='bg-[#FFF7EE] dark:bg-[#2C2C2C] min-h-screen  pt-12 lg:pt-36 relative' >
            <div className='w-64 h-64 rounded-full bg-gradient-to-t from-yellow-100 to-violet-100 dark:from-green-500 dark:to-purple-700 blur-lg filter absolute bottom-1/4 left-1/4 '/>
            <div className='flex flex-col w-full h-full items-center max-w-[1440px] mx-auto '>
                <span className='px-7 py-1.5 mb-2 border dark:border-[#444444] text-[#fff] bg-[#2C2C2C] dark:bg-gradient-to-r from-pink-600 to-transparent text-left rounded-full text-sm '>Intelligent</span>
                <h1 className='text-4xl lg:text-6xl text-center font-medium'> Code Generation for Developers</h1>
                <p className='lg:text-lg text-center mt-4'>Enhance your coding with CodeGenPro, a powerful web app powered by OpenAI API.</p>
                <p className='lg:text-lg text-center'>Generate code, explain algorithms, add comments, and refactor effortlessly.</p>
                <p className='lg:text-lg text-center'> Experience AI-assisted programming now!</p>

                <Link href={'/try'} className='hover:border dark:border-[#444444] px-7 py-3.5 rounded-lg tracking-wider bg-[#8a38f5] text-white font-medium shadow-[4px_4px_#000] hover:border-[#fa8000] hover:bg-[#fff] hover:text-[#fa8000] hover:rounded-full transition-all duration-200 ease-linear mt-12'>
                    Get Started
                </Link>
            </div>
        </section>
    )
}

export default Hero