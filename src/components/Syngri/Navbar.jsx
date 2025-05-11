import React, {useRef, useState} from "react";
import SolidButton from "./SolidButton";
import {AiOutlineUnorderedList, AiOutlineClose} from "react-icons/ai";


const Navbar = () => {
    const [displayMobileNav , setDisplayMobileNav] = useState("hidden")

    const liStyle = "w-full py-2 text-lg flex items-center justify-center cursor-pointer rounded-2xl md:w-fit md:px-6 md:h-full "

    return (
        <div className={"navContainer"}>
            <nav className={"flex justify-between w-full"} >
                <div className={"logo flex items-center gap-2 text-2xl"}>
                    <AiOutlineUnorderedList onClick={()=> setDisplayMobileNav("flex")} className={"block md:hidden"} color={"white"} />
                    <span>Syngri</span>

                </div>

                <ul className={` ${displayMobileNav} flex-col w-full items-center z-60 top-0 right-0 absolute md:w-fit md:gap-3 md:flex md:flex-row md:relative `}>
                    <div
                        className={"block absolute top-2 left-4 z-70 md:hidden"}
                        onClick={()=> setDisplayMobileNav("hidden")}
                    >
                        <AiOutlineClose color={"white"} size={30} />
                    </div>
                    <li className={liStyle} >About Us</li>
                    <li className={liStyle} >Services</li>
                    <li className={liStyle} >Projects</li>
                    <li className={liStyle} >Contact</li>
                </ul>

                <SolidButton>Contact us</SolidButton>
            </nav>
        </div>
    )
}

export default Navbar