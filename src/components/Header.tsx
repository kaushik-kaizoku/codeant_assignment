import search from '../assets/search.svg'
import refresh from '../assets/refresh.svg'

export const Header = () => {
    return <div className="px-6 pt-4 pb-2 border-b border-solid border-neutral-200">
    <div className="sm:flex justify-between items-center ">
        <div className='mb-2 sm:mb-0'>
        <div className="text-xl font-semibold text-gray-900">Repositories</div>
        <div className="text-gray-700 text-sm">33 Repositories</div>
        </div>
        <div className="flex gap-2 items-center ">
            <div><button className="w-32 h-10 rounded-lg border-[1px] border-solid border-neutral-200 flex justify-center items-center gap-1.5 text-gray-700 text-sm"><img src={refresh} alt="refresh" className="w-3 h-3"/>Refresh</button></div>
            <div><button className="w-40 h-10 rounded-lg bg-blue-600 ring-2 ring-blue-300 text-sm text-white">+  Add Repository</button></div>
        </div>
    </div>
    <div><button className="w-[360px] rounded-md border-[1px] border-solid border-neutral-200 flex justify-start items-center gap-4 px-4 py-2 mt-4 text-gray-700">
        <img src={search} alt="search" className="w-5 h-5"/>
        Search Repositories
        </button>
    </div>
</div>
}