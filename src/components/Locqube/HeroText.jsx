import React from "react";

const HeroText = () => {

    return (
        <div className={"flex flex-col w-full overflow-hidden gap-2 items-center text-gray-300 px-10 md:px-0" }>


            <div className={"flex w-fit rounded-full bg-gray-900 gap-1 justify-center items-center pr-4 border-1 border-gray-500" }>
                <div className={"size-8 rounded-full bg-blue-700 "}></div>
                <p className={"text-gray-100 text-sm"}>AI-powered research technology</p>
            </div>
            <h3 className={"text-5xl md:text-7xl text-center"}>List your home<br/> in <span className={"text-white underline"}>minutes</span> not days</h3>
            <p className={"text-sm mt-5 text-center"}>AI evaluate your homes and surroundings to calculate the perfect price </p>
        </div>
    )
}

export default HeroText