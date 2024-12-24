import database from '../assets/database.svg'

interface RepoProps {
    repoName: string,
    language: string,
    size: number,
    days: number,
    status: "Public" | "Private"
}


export const Repo = ({
    repoName,
    language,
    size,
    days,
    status,
    isOpen
}: {
    repoName: string,
    language: string,
    size: number,
    days: number,
    status: "Public" | "Private",
    isOpen: boolean
}) => {
    return <div className={!isOpen?'border-b border-solid h-[14.28%] pl-6 flex flex-col justify-center items-start hover:bg-neutral-100':'border-b border-solid h-[14.28%] pl-6 flex flex-col justify-center items-start hover:bg-neutral-100 bg-zinc-300'}>
        <div className="flex gap-2 items-center">
            <div className="font-medium text-lg leading-5">{repoName}</div>
            <div className="border border-blue-200 bg-sky-50 text-blue-600 py-0.5 px-2 text-xs rounded-full">{status}</div>
            </div>
        <div className="flex items-center mt-1">
            <div className="text-sm flex items-center gap-1">{language}<div className="bg-blue-600 rounded-full h-1.5 w-1.5"></div></div> 
            <div className="text-sm mx-6 flex items-center gap-1"><img src={database} alt='database' className='h-[11px] w-[11px]'/>{size} KB</div>  
            <div className="text-sm">Updated {days} days ago</div>
        </div>
    </div>
}