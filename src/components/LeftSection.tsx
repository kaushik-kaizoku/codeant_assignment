import vectorLogo from '../assets/Vector.svg'
import  arrow from '../assets/small-right.svg'
import logo from '../assets/logo.svg'
import logo2 from '../assets/logo2.svg'

function LeftSection () {
    return <div className="hidden md:flex h-screen w-1/2 border-r border-solid border-neutral-200 relative">
    <div className="absolute left-0 bottom-0 ">
    <img src={logo2} alt="Logo" className="w-36 h-40"/>
    </div>
    <div className="h-screen w-full flex justify-center items-center">

    <div className="h-[310px] w-[474px] relative">
    {/* total email */}
    <div className="flex justify-start z-0">
    <div className="w-[447px] h-[160px] shadow-[0_0_15px_rgba(0,0,0,0.3)] rounded-3xl">
    <div className="h-12 border-b-[1px]">
    <div className="ml-5 mt-5 space-x-2 flex">
    <div className="w-6 h-6">
    <img src={logo} alt="Logo" className="w-6 h-6"/>        
    </div>
    <div className="font-bold text-lg text-slate-900">
        AI to Detect & Autofix Bad Code
    </div>
    </div>
    </div>
    <div className="flex justify-evenly">
        <div className="mt-5"><div className="text-center text-slate-900 font-bold text-lg">30+</div>
        <div className="text-sm">Language support</div></div>
        <div className="mt-5"><div className="text-center text-slate-900 font-bold text-lg">10K+</div>
        <div className="text-sm">Developers</div></div>
        <div className="mt-5"><div className="text-center text-slate-900 font-bold text-lg">100K+</div>
        <div className="text-sm">Hours saved</div></div>
    </div>
    </div>
    </div>
    {/*  */}
    {/* card 10 */}
    <div className="flex justify-end mr-2 z-10 absolute bottom-0 right-0">
    <div className="w-64 h-40 shadow-[0_0_15px_rgba(0,0,0,0.3)] bg-white rounded-3xl px-8 py-4 ">
    <div className="relative">
    <div className="absolute top-0 left-0 w-14 h-14">
        <div className="h-full rounded-full bg-[#9D90FA40] flex justify-center items-center pb">
        <img src={vectorLogo} alt="Vector" className="w-7 h-7" /></div>
    </div>
    <div className="absolute top-0 right-0 w-[65] h-[39]">
        <div className="flex ">
        <div className="w-6 h-6 pt-3 pl-2">
        <img src={arrow} alt="Arrow" className="w-3 h-3 " /></div>
        <div className='text-[#0049C6] text-center w-7 h-5 font-bold text-sm pt-2'>14%</div>
        </div>
        <div className="text-xs px-2 pt-2 text-neutral-900">This week</div>
    </div>
    <div className="absolute left-0 top-16 w-28 h-16 ">
        <div className="text-sm font-bold text-neutral-900">Issues Fixed</div>
        <div className="text-3xl font-bold text-neutral-900">500K+</div>
    </div>
    </div>
    </div>
    {/* card 10 */}
    </div>
    </div>
    </div>
    </div>
}

export default LeftSection