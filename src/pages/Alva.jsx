import React from "react";
import NavBar from "../components/Alva/Navbar";
import {AiOutlineArrowRight} from "react-icons/ai";

const Alva = () => {
    return (
        <div className={"size-full bg-white px-3 md:px-15 "}>
            <div className={"bg-gray-200 w-full flex items-center justify-center rounded-full my-3"}>
                <p className={"text-sm py-2"}>Some long short text here <span className={"underline"}>learn More</span> </p>
                <AiOutlineArrowRight color={"black"} />
            </div>
            <NavBar />
        </div>
    )
}

export default Alva