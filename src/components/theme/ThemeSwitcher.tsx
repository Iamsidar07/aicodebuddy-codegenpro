'use client'
import { useState, useEffect, MouseEventHandler } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image';

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const [isDropdownMenuShown, setIsDropdownMenuShown] = useState(false);

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const handleThemeClick = () => {
        setIsDropdownMenuShown((prevState => !prevState));
    }


    return (
        <div className='relative'>
            {
                theme === "light" && (<Image src={'/icons/light.svg'} alt='light theme' width={30} height={30} className='object-contain cursor-pointer' onClick={handleThemeClick} />)
            }
            {
                theme === "dark" && (<Image src={'/icons/dark.svg'} alt='dark theme' width={30} height={30} className='object-contain cursor-pointer' onClick={handleThemeClick} />)
            }
            {
                theme === "system" && (<Image src={'/icons/system.svg'} alt='system theme' width={30} height={30} className='object-contain cursor-pointer' onClick={handleThemeClick} />)
            }

            {
                isDropdownMenuShown && (
                    <div className='absolute top-12 right-2 z-10 min-w-[140px] bg-white rounded-md shadow-xl dark:bg-[#2C2C2C] border dark:border-[#444444] flex flex-col items-baseline'>
                        <button type='button' onClick={() => {
                            setTheme("system");
                            setIsDropdownMenuShown(false)
                        }} className='border-t dark:border-t-[#444444] pl-4 py-1.5 cursor-pointer w-full text-left'>System</button>
                        <button type='button' onClick={() => {
                            setTheme("dark");
                            setIsDropdownMenuShown(false)
                        }} className='border-t dark:border-t-[#444444] pl-4 py-1.5 cursor-pointer w-full text-left'>Dark</button>
                        <button type='button' onClick={() => {
                            setTheme("light");
                            setIsDropdownMenuShown(false)
                        }} className='border-t dark:border-t-[#444444] pl-4 py-1.5 cursor-pointer w-full text-left'>Light</button>
                    </div>
                )
            }
        </div>
    )
}

export default ThemeSwitcher