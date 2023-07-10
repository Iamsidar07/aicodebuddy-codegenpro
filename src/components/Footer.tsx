import Image from 'next/image'
import React from 'react'
import { SOCIALS } from '@/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='mt-12 lg:mt-24 border-t dark:border-[#444444]'>
      <div className='max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-center lg:justify-between p-4 lg:p-6 w-full gap-4'>
        <p className='text-lg font-medium'>&copy;{new Date().getFullYear().toString()} All rights reserved</p>
        <div className='flex flex-wrap items-center gap-4'>
          {
            SOCIALS.map((social, i) => <Link href={social.link} key={i} className='w-6 h-6 relative'>
              <Image src={`/icons/${social.name}.svg`} alt={social.name} fill className='object-contain' />
            </Link>)
          }
        </div>
      </div>
    </footer>
  )
}

export default Footer