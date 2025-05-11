import React, {useRef, useState} from "react";
import {AiOutlineUnorderedList, AiOutlineClose} from "react-icons/ai";
import OutlineButton from "./OutlineButton";
import SolidButton from "./SolidButton";

const navlist = ["Home" , "features" , "Products" , "Pricing" , "Something"]

const NavBar = () => {
    const [displayMobileNav , setDisplayMobileNav] = useState("hidden")

    return (
        <div className={"z-40"}>
            <nav className={"flex h-fit items-center justify-between w-full font-[Montserrat]"} >
                <div className={"flex items-center justify-between gap-17"}>

                    <div className={"flex items-center justify-between gap-1"}>
                        <button
                            className={"block md:hidden cursor-pointer mr-2"}
                            onClick={()=> setDisplayMobileNav("flex")}
                        >
                            <AiOutlineUnorderedList size={20}/>
                        </button>
                        <div className={"size-12 relative rounded-xl bg-black"}>
                            <p className={"text-white absolute right-0 bottom-[-11px] font-bold text-6xl"}>a</p>
                        </div>
                        <p className={"font-bold text-2xl"}>Alva</p>
                    </div>

                    <ul className={displayMobileNav + " flex-col absolute text-center w-full bg-white top-0 right-0 md:relative md:w-fit md:bg-transparent md:flex md:flex-row"}>
                        <button
                            className={"md:hidden p-2 bg-gray-900 absolute top-2 left-2 rounded-full cursor-pointer"}
                            onClick={()=> setDisplayMobileNav("hidden")}
                        >
                            <AiOutlineClose size={25} color={"white"} />
                        </button>
                        {
                            navlist.map((value, index)=>
                                <li className={"text-sm p-4 cursor-pointer hover:bg-gray-100 hover:rounded-lg"} key={index}>{value}</li>
                            )
                        }
                    </ul>
                </div>


                <div className={"flex items-center justify-center gap-2"}>
                    <OutlineButton title={"login"} />
                    <SolidButton title={"Register"} />
                </div>
            </nav>
        </div>
    )
}

export default NavBar