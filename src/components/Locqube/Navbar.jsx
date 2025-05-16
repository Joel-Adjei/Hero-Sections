import React, {useRef, useState} from "react";
import {AiOutlineUnorderedList, AiOutlineClose} from "react-icons/ai";
import BlackButton from "./BlackButton";

const navlist = ["Sell with us" , "Blog" , "Properties" , "Contacts"]

const NavBar = () => {
    const [displayMobileNav , setDisplayMobileNav] = useState("hidden")

    return (
        <>
            <div
                className={`${displayMobileNav} md:hidden fixed top-0 right-0 w-full  h-full bg-gray-400 opacity-[40%]`}
                onClick={()=> setDisplayMobileNav("hidden")}
            >

            </div>

            <nav className={"z-50 px-2 py-1"}>
                <div className={"sticky top-0 flex w-full px-3 py-2 rounded-lg bg-gray-900 items-center justify-between"}>
                    <div className={"flex items-center gap-3 justify-center text-white font-[Nexa]"}>
                        <div className={"flex items-center gap-2"}>
                            <AiOutlineUnorderedList
                                onClick={()=> setDisplayMobileNav("flex")}
                                className={"md:hidden"} color={"white"} size={30} />
                            <h4 className={"font-bold text-2xl"}>locqube</h4>
                        </div>

                        <ul className={`${displayMobileNav} fixed bg-black h-full w-90 top-0 left-0 z-50 flex-col md:relative md:size-fit md:bg-transparent md:flex  md:flex-row`}>
                            <button
                                className={"absolute cursor-pointer rounded-full md:hidden top-2 right-2 p-3 bg-gray-400"}
                                onClick={()=>setDisplayMobileNav("hidden")}
                            >
                                <AiOutlineClose size={24} color={"white"} />
                            </button>
                            {
                                navlist.map(( item, index)=>(
                                    <li key={index} className={"px-2 py-3 rounded-lg text-sm cursor-pointer hover:bg-gray-700"}>{item}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={"flex items-center justify-center gap-2"}>
                        <BlackButton title={"Sign in"} />
                        <button className={"px-4 py-3 cursor-pointer rounded-xl bg-white text-gray-900"}>Sign up</button>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default NavBar