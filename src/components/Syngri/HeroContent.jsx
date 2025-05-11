import React from "react";
import SolidButton from "./SolidButton";
import OutlineButton from "./OutlineButton";

const HeroContent = () => {
    return (
        <div className={"content-container w-full items-center gap-3 md:items-start flex flex-col p-10 md:pl-17 text-center md:text-left md:w-[50%] z-20"}>
            <div className={"border-1 rounded-3xl flex items-center justify-center py-2 px-4 w-[fit-content] gap-1"}>
                <div className={"size-3 rounded-full"} style={{backgroundColor: "green"}}> </div>
                <p className={"text-[12px]"}>Some text here</p>
            </div>

            <h3 className={"main-text"}>Transforming your ideas into digital success with us</h3>
            <div>
                <p>We're your partner in product design website creation, and branding for every stage of your business.</p>
            </div>
        <div className={"buttons"}>
            <SolidButton className={"w-[50%]"}>Come</SolidButton>
            <OutlineButton className={"w-[50%]"}> Came </OutlineButton>
        </div>
        </div>
    )
}

export default HeroContent