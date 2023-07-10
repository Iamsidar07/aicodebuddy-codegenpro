import Image from "next/image"
import Link from "next/link"
import ThemeSwitcher from "./theme/ThemeSwitcher"

const Navbar = () => {
  return (
    <nav className="bg-[#fff] dark:bg-[#2C2C2C] fixed z-50 border-b dark:border-b-[#444444] top-0 w-full">
      <div className="flex items-center justify-between p-4 max-w-[1440px] mx-auto">
        <Link href={'/'} className="flex items-center gap-2">
          <div className="w-8 h-8 relative">
            <Image src={'/icons/logo.svg'} alt="logo" fill className="object-contain" />
          </div>
          <span className="text-lg font-medium ">codegenPro</span>
        </Link>
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <Link href={'https://github.com/Iamsidar07/aicodebuddy-codegenpro'} className="flex items-center gap-2">
            <div className="w-8 h-8 relative">
              <Image src={'/icons/github.svg'} alt="logo" fill className="object-contain" />
            </div>
            <span className="text-lg font-medium ">Github</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar