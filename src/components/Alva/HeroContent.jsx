import React from "react";
import SolidButton from "./SolidButton";
import {AiFillPlusCircle} from "react-icons/ai";

const HeroContent = () => {
    return (
        <div className={"w-full flex flex-col gap-9 items-center justify-between md:flex-row font-[Montserrat] "}>
            <div className={"flex flex-col items-center md:items-start"}>

                <div className={" border-1 w-fit border-black border-gray-200 bg-gray-100 text-sm rounded-full tracking-lg mb-6"}>
                    <p className={"py-2 pr-3"}><span className={"py-2 px-4 bg-black text-white rounded-full mr-2"}>Never</span>Multi-currency account</p>
                </div>

                <div className={"mb-6 px-5 sm:px-10 md:px-0 text-center md:text-left"}>
                    <h4 className={"text-5xl font-semibold font-[Nexa] mb-4 "}>
                        ALL in one App finance for your business
                    </h4>
                    <p className={"text-sm lg:w-100"}>
                        Keep your business account no ods safely organized under one root. Manage money quickly, easily & efficiently
                    </p>
                </div>

                <div className={"flex items-center gap-2 "}>
                    <SolidButton title={"Some text"} />
                    <button
                        className={"flex items-center gap-2 px-7 py-2 border-1 border-gray-100 cursor-pointer text-sm rounded-full bg-white text-black"}>
                        Preview
                        <AiFillPlusCircle size={20}/>
                    </button>
                </div>
            </div>
            <div className={"py-7"}>
                <div className={"size-85 lg:size-100 bg-gray-200 rounded-xl " }>

                </div>
            </div>

        </div>
    )
}

export default HeroContent