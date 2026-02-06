import React, { useState, useEffect, lazy } from "react"
import { BadgePlus, Search } from "lucide-react"
import { Link } from "react-router-dom"

const SearchBar = lazy(
    () => import("../Search_bar/Search_bar"),
    { loading: () => null }
)

const Navbar = () => {
    const [Open, setOpen] = useState(false)

    useEffect(() => {
        const handleKeyDown = (event) => {
            if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
                event.preventDefault()
                setOpen(true)
            }
            if (event.key === 'Escape' && Open) {
                setOpen(false)
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [Open])

    return (
        <header className="w-full fixed top-[.5rem] left-0 z-50 text-sm">
            <nav className=" max-w-screen-2xl mx-auto p-[.8rem] md:px-5  rounded-[1rem] gap-10 flex justify-between items-center">
                <div className="font-semibold w-fit md:block">
                    <Link to="/">
                        <p>Ops-UI</p>
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <div onClick={() => setOpen(!Open)} className="flex ring-[.5px] ring-white/30 justify-between cursor-pointer relative items-center lg:w-fit h-[2em] bg-[var(--bg)] shadow-[var(--shadow-s)] rounded-lg  px-[1rem] py-[1rem] outline-0 text-sm" >
                        <p className="border-r-1 border-white mr-4 pr-4">
                            <Search className="w-4 h-4" />
                        </p>
                        <div className="right-[10px] flex items-center gap-2 text-[12px] text-neutral-500">
                            <div className="bg-[var(--bg-light)]  flex items-center justify-center rounded-sm px-[6px] py-[2px]">⌘</div>
                            <div className="bg-[var(--bg-light)]  flex items-center justify-center rounded-sm px-[8px] py-[2px] ">K</div>
                        </div>
                    </div>
                    <Link to="/template">
                        <button className=' flex ring-[.5px] ring-white/30 justify-between cursor-pointer relative items-center lg:w-fit h-[2em] bg-[var(--bg)] shadow-[var(--shadow-s)] rounded-lg  px-[1rem] py-[1rem] outline-0 text-sm gap-2 items-center flex duration-600 ease-inOut'>
                            <BadgePlus className="w-4 h-4" />
                            <p className='text-sm'>
                                Add Component
                            </p>
                        </button>
                    </Link>
                </div>
            </nav>
            {
                Open &&
                <div className='fixed inset-0 h-screen z-[20000] backdrop-blur-[2px]'>
                    <SearchBar Open={setOpen} />
                </div>
            }
        </header>
    )
}
export default Navbar