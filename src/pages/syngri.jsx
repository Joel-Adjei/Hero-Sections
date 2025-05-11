import React from "react";
import Navbar from "../components/Syngri/Navbar";
import "../components/Syngri/syngriStyle.css"
import HeroContent from "../components/Syngri/HeroContent";

const Syngri = () => {
    return (
        <div className={"bg md:overflow-hidden"}>
            {/*Background*/}
            <div className={"absolute w-full h-full overflow-hidden"}>
                <div className={"fade-boxShadow "}> </div>
                <div className={"backdrop"}> </div>
            </div>


            <Navbar />

            <div style={{marginTop: "100px", zIndex: "90", position: "relative"}}>
                <HeroContent />
            </div>

        </div>
    )
}

export default Syngri