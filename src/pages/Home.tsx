import { Header } from "../components/Header"
import { Navbar } from "../components/Navbar"
import { Repo } from "../components/Repo"
import { useState } from "react"


export const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    return <div className="h-screen sm:grid sm:grid-cols-5 relative sm:static">
        {/* sidebar  */}
        <div className=" sm:col-span-1 " >
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
      
        {/* main page  */}
        <div className="sm:h-screen w-full sm:col-span-4 sm:px-6 sm:pt-4 sm:pb-4 z-0 absolute sm:static">
            <div className="h-screen sm:h-full flex flex-col sm:rounded-xl border-[1px] border-solid border-neutral-200 ">
            <div>     
            <Header/>
            </div>
            <div className="flex-1 h-auto overflow-y-auto no-scrollbar ">
            <Repo isOpen={isOpen} repoName="design-system" status="Public" language="React" size={1324} days={2}/>
            <Repo isOpen={isOpen}  repoName="design-system" status="Private" language="Javascript" size={908} days={2}/>
            <Repo isOpen={isOpen} repoName="design-system" status="Public" language="React" size={1004} days={2}/>
            <Repo isOpen={isOpen} repoName="design-system" status="Public" language="Python" size={1324} days={2}/>
            <Repo isOpen={isOpen} repoName="design-system" status="Public" language="React" size={1324} days={2}/>
            <Repo isOpen={isOpen} repoName="design-system" status="Public" language="React" size={1324} days={2}/>
            <Repo isOpen={isOpen} repoName="design-system" status="Public" language="React" size={1324} days={2}/>
            <Repo isOpen={isOpen} repoName="design-system" status="Public" language="React" size={1324} days={2}/>
            </div>
            </div>
        </div>
    </div>
}