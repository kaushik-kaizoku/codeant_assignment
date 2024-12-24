import logo from '../assets/logo.svg'
import Home  from '../assets/home.svg?react'
import Book from '../assets/book.svg?react'
import Code from '../assets/code.svg?react'
import Cloud from '../assets/cloud.svg?react' 
import Gear from '../assets/gear.svg?react'
import Phone from '../assets/phone.svg?react'
import Logout from '../assets/sign-out.svg?react'
import Bars from '../assets/bars.svg?react'
import Close from '../assets/close.svg?react'

export const Navbar = ({ isOpen,setIsOpen }:{isOpen:boolean, setIsOpen:React.Dispatch<React.SetStateAction<boolean>>}) => {
    
    return  <div className="flex flex-col sm:h-screen sm:col-span-1 sm:relative sm:border-r-[1px] sm:border-solid sm:border-neutral-200">
    {/* header  */}
    <div className="h-16 flex items-center justify-between">
    <div className="flex gap-2.5 px-5 pt-4">
    <img src={logo} alt="Logo" className="w-7 h-8"/>   
    <div className="text-2xl font-normal font-satoshi px-1">CodeAnt AI</div></div>
    <div className="sm:hidden pr-2">{!isOpen?<button onClick={() => {setIsOpen(true)}}><Bars/></button>:<button onClick={() => {setIsOpen(false)}}><Close/></button>}</div>
    </div>
    {/* dropdown  */}
    {!isOpen?<div className='hidden sm:block'><div className='flex'>
    <div className="mt-3 mx-3 border-[1px] border-solid border-zinc-300 h-10 w-52 rounded-md flex justify-center items-center gap-0.5">
    <p className='text-gray-900'>UtkarshDhairyaPa...</p><svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.7616 1.68173L7.79282 7.40048C7.60532 7.55673 7.41782 7.61923 7.26157 7.61923C7.07407 7.61923 6.88657 7.55673 6.73032 7.43173L0.730318 1.68173C0.417818 1.40048 0.417818 0.900484 0.699068 0.619234C0.980318 0.306734 1.48032 0.306734 1.76157 0.587984L7.26157 5.83798L12.7303 0.587984C13.0116 0.306734 13.5116 0.306734 13.7928 0.619234C14.0741 0.900484 14.0741 1.40048 13.7616 1.68173Z" fill="#181D27"/>
    </svg>
    </div>
    </div>
    <div className='flex flex-col items-center mt-4'>
    <Button><Home /><div >Repositories</div></Button>
    <Button><Code /><div >AI Code Review</div></Button>
    <Button><Cloud/><div >Cloud Security</div></Button>
    <Button><Book /><div >How to Use</div></Button>
    <Button><Gear /><div >Settings</div></Button>
    </div>
    {/* footer  */}
    <div className='absolute bottom-0 flex flex-col items-center w-full h-24'> 
        <Button><Phone/>Support</Button>
        <Button><Logout/>Logout</Button>
    </div>
    </div>:<div className='flex-1 h-auto '>
    <div className='z-10 bg-white absolute flex flex-col w-full'>
    <div className='px-5 py-2'>
    <div className='flex '>
    <div className="border-[1px] border-solid border-zinc-300 h-10 sm:w-52 w-full rounded-md flex justify-between items-center gap-0.5 px-2">
    <p className='text-gray-900'>UtkarshDhairyaPanwar</p><svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.7616 1.68173L7.79282 7.40048C7.60532 7.55673 7.41782 7.61923 7.26157 7.61923C7.07407 7.61923 6.88657 7.55673 6.73032 7.43173L0.730318 1.68173C0.417818 1.40048 0.417818 0.900484 0.699068 0.619234C0.980318 0.306734 1.48032 0.306734 1.76157 0.587984L7.26157 5.83798L12.7303 0.587984C13.0116 0.306734 13.5116 0.306734 13.7928 0.619234C14.0741 0.900484 14.0741 1.40048 13.7616 1.68173Z" fill="#181D27"/>
    </svg>
    </div>
    </div>
    <div className='flex flex-col items-start justify-start mt-4 '>
    <Button><Home/>Repositories</Button>
    <Button><Code/>AI Code Review</Button>
    <Button><Cloud/>Cloud Security</Button>
    <Button><Book/>How to Use</Button>
    <Button><Gear/>Settings</Button>
    <Button><Phone/>Support</Button>
    <Button><Logout/>Logout</Button>
    </div>
    </div>
    <div className='flex-1 h-auto bg-blue-800 w-full'></div>
    </div>
    </div>}
    </div>
}

function Button ({children}: {children: React.ReactNode}) {
    return <button className="w-full sm:w-52 h-10 focus:text-white focus:bg-blue-600 focus:ring-1 focus:ring-blue-300 rounded-lg  font-semibold text-sm text-gray-700 pl-2 flex justify-start items-center gap-2">{children}</button>
}
