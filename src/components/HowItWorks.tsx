'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Lottie from 'react-lottie'
import { explanation } from '../../public/lottie'
import { HOWITWORKS } from '@/constants'

const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: explanation,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};
const HowItWorks = () => {
    return (
        <section className='relative w-full py-24 z-20 pt-24 border-t dark:border-[#444444]'>
            <div className='absolute -top-16 lg:-top-24 -left-6 w-24 lg:w-36 h-24 lg:h-36'>
                <Image src={'/icons/feather.svg'} alt='feather' fill className='object-contain ' />
            </div>

            <div className='flex flex-col lg:flex-row justify-center w-full h-full   max-w-[1440px] mx-auto '>
                <div className='relative h-[320px] lg:h-[580px] w-full lg:w-1/2 rounded-lg '>
                    {/* <Image src={'/icons/explaination.svg'} alt='explain' fill className='object-contain w-full h-full' /> */}
                    <Lottie direction={180} options={defaultOptions} style={{ width: "100%", height: "100%" }} />
                </div>
                <div className='flex flex-col items-start gap-4 p-6 w-full max-w-md '>
                    <h2 className='text-2xl lg:text-6xl text-left my-6 font-medium'>How It Works</h2>
                    {
                        HOWITWORKS.map((step, i) => <div key={i} className='flex items-baseline gap-6'>
                            <Image src={'/icons/tick.svg'} alt='tick' width={30} height={30} className='object-contain' />
                            <p className='text-left'>{step.title}</p>
                        </div>)
                    }
                    <Link href={'/try'} className='hover:border dark:border-[#444444] px-7 py-3.5 rounded-lg tracking-wider bg-[#8a38f5] text-white font-medium shadow-[4px_4px_#000] hover:border-[#fa8000] hover:bg-[#fff] hover:text-[#fa8000] hover:rounded-full transition-all duration-200 ease-linear mt-12'>
                        Get Started
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks