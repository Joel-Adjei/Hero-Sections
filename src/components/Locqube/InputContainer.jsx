import React from "react";
import BlackButton from "./BlackButton";

const InputContainer = () => {

    return (
        <div  className={"w-full  bg-white/10 z-[2] text-white backdrop-blur-sm rounded-xl p-4"}>

            <div className={"w-full flex flex-col items-center justify-between gap-4 mb-5 sm:flex-row  sm:items-start sm:gap-0 sm:mb-3"}>
                <p className={" text-2xl md:text-lg text-white text-center sm:text-left"}>Enter home address<br/><span className={"text-md font-light text-gray-500"}>and get best price offer</span></p>
                <div className={"flex gap-3"}>
                    <div className={"flex items-center gap-2 "}>
                        <input type={"checkbox"} className={""}/>
                        <p>I'm seller</p>
                    </div>
                    <div className={"flex items-center gap-2 "}>
                        <input type={"checkbox"} className={" bg-red-600"}/>
                        <p className={"text-gray-500"}>I'm agent</p>
                    </div>
                </div>
            </div>

            <div className={"w-full flex items-center justify-between bg-white rounded-xl p-1"}>
                <input
                    placeholder={"Enter home Address"}
                    className={"placeholder-gray-400 text-gray-900 flex-1 p-2 border-0 outline-0"}/>
                    <BlackButton title={"Search"} className={"sm:px-12"} />
            </div>
        </div>
    )
}

export default InputContainer