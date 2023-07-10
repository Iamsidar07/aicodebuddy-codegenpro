import Image from 'next/image'
import React from 'react'
import { FEATURES } from "@/constants"
const Feature = () => {
    return (
        <section className=' relative py-12 lg:py-24 border-t dark:border-[#444444] px-4'>
            <div className='max-w-[1440px] mx-auto flex flex-col items-center justify-center w-full'>
                <h1 className='font-medium text-2xl lg:text-6xl'>Features</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 py-6 w-full h-full mt-12'>
                    <Image src={'/icons/logo.svg'} alt='logo' fill className='filter blur-2xl hidden dark:block ' />
                    {
                        FEATURES.map((feature, i) => (<div key={i} className='px-6 py-12 border dark:border-[#444444] dark:bg-gradient-radial from-[#383838] to-transparent hover:border-purple-600 hover:shadow-[4px_4px_#000] hover:scale-95 transition-all duration-200 ease-linear flex flex-col  leading-6 backdrop-blur'>
                            <div className='relative w-16 h-16 mx-auto'>
                                <Image src={'/icons/logo.svg'} alt='logo' fill className='object-contain' />
                            </div>
                            <h1 className='text-lg lg:text-xl font-medium tracking-wider mt-6'>
                                {feature.title}
                            </h1>
                            <p className='mt-2'>
                                {feature.description}
                            </p>
                        </div>))
                    }

                </div>
            </div>
        </section>
    )
}

export default Feature