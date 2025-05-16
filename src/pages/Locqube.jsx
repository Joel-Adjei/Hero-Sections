import React from "react";
import {AiOutlineArrowRight} from "react-icons/ai";
import NavBar from "../components/Locqube/Navbar";
import HeroText from "../components/Locqube/HeroText";
import InputContainer from "../components/Locqube/InputContainer";

const Locqube = () => {
    return (
        <div className={"size-full w-full h-[100vh] bg-linear-to-b from-black from-65% to-blue-700 "}>

            <h4 className={"fixed bottom-[-180px] w-full flex justify-center font-[Nexa] opacity-[50%]  text-white font-black text-[290px]"}>locqube</h4>
            <div className={"fixed bottom-[0] opacity-[90%] h-10 w-full bg-linear-to-t from-orange-600 from-10% via-pink-700 via-25% to-transparent"}> </div>

            <NavBar />
            <div className={"z-[10] w-full flex flex-col items-center mt-7"}>
                <div className={"w-fit"}>
                    <HeroText />
                </div>
                <div className={"w-[90%] sm:w-[80%] lg:w-170 mt-11"}>
                    <InputContainer />
                </div>
            </div>

        </div>
    )
}

export default Locqube