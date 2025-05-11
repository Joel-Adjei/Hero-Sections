import React, {useRef, useState} from "react";
import {AiOutlineUnorderedList, AiOutlineClose } from "react-icons/ai";


const NavBar = () => {
    const [displayMobileNav , setDisplayMobileNav] = useState("hidden")

    const liStyle = "text-green-900 font-[Roboto] text-sm px-5 py-2 cursor-pointer hover:bg-white hover:backdrop-opacity-60 rounded-lg"

    return (
        <div style={{zIndex: 40}} >
            <nav className={"flex items-center px-3 py-2 justify-between z-20"}>
                <div className={"flex items-center"}>
                    <AiOutlineUnorderedList
                        onClick={()=> setDisplayMobileNav("flex")}
                        className={"text-green-900 md:hidden mr-2"} size={25}
                    />
                    <span className={"bg-green-900 size-7 flex items-center justify-center rounded-full text-white"}>T</span>
                    <p className={"text-green-900 ml-2 font-bold"}>SOUNDTRACK</p>
                </div>

                <ul className={`${displayMobileNav} flex-col w-50 h-[100vh] absolute top-0 left-0  items-start bg-white md:items-center gap-4 
                                md:bg-transparent md:h-0 md:w-fit md:flex md:flex-row md:relative `}>
                    <div className={"md:hidden w-full bg-gray-200 flex p-2 items-center justify-between"}>
                        <span className={"bg-green-900 size-6 flex items-center text-sm justify-center rounded-full text-white"}>T</span>
                        <AiOutlineClose
                            onClick={()=> setDisplayMobileNav("hidden")}
                            className={"text-green-900"} size={22} />
                    </div>
                    <li className={liStyle}>Heavy & Text</li>
                    <li className={liStyle}>Library</li>
                    <li className={liStyle}>Pricing</li>
                </ul>

                <button className={"px-7 py-2 bg-white text-green-900 hover:bg-green-900 hover:text-white rounded-3xl text-[Montserrat] font-medium cursor-pointer"}>
                    Login
                </button>
            </nav>


        </div>
    )
}

export default NavBar