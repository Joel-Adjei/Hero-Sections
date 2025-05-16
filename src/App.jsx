import React, {useRef} from "react";
import {Link} from "react-router";
import {soundTrackImg, syngriImg , alva} from "./assets/constant";


function DivContainers ({title , to , src , color= "bg-black"}){
    return(
        <li >
            <Link
                className={ "border-4 border-gray-300 relative overflow-hidden cursor-pointer bg-blue-300 h-25 sm:h-45 flex items-center justify-center rounded-xl"}
                to={to}>
                <div className={"size-full absolute 10  z-10 opacity-[55%] hover:opacity-[15%] " + color}> </div>
                <img className={"size-full absolute object-cover object-center hover:mb-2 z-0"} src={src}/>
                <p className={"text-xl text-white font-extrabold font-[Montserrat] z-20"}>{title}</p>
            </Link>
        </li>
    )
}
const App = () => {
    return (
        <div>
            <div className={"h-120 md:h-100 relative w-full flex flex-col items-center justify-center overflow-hidden px-2 mb-3 "}>
                <div className={"size-full absolute 10  z-10 bg-blue-700 opacity-[25%] hover:opacity-[45%] z-10"}> </div>

                {/*<div className={"absolute bottom-[-20px] left-3 w-80 z-0"}>*/}
                {/*    <img className={"w-full rounded-lg "} src={soundTrackImg} />*/}
                {/*</div>*/}
                <h2 className={"absolute top-[-140px] left-[55px] md:left-[-25px] text-[170px] md:text-[190px] font-black opacity-[45%] font-[Nexa] z-0" }>Hero</h2>
                <h2 className={"absolute bottom-[-110px] right-[-45px] text-[190px] font-black opacity-[45%] font-[Nexa] z-0" }>Sections</h2>

                <h2 className={"text-5xl md:text-7xl text-gray-700 font-black font-[Montserrat] text-center z-20" }>All Hero Sections</h2>
                <div className={"w-70 h-2 bg-gray-600 z-20 rounded-full"}> </div>
            </div>

            <ul className={"grid grid-cols-2 md:grid-cols-3 gap-3 px-4 py-2"}>
                <DivContainers color={"bg-purple-900"} src={syngriImg} title={"Syngri"} to={"/syngri"} />
                <DivContainers color={"bg-green-900"} src={soundTrackImg} title={"SoundTrack"} to={"/soundtrack"} />
                <DivContainers color={"bg-gray-700"} src={alva}  title={"Alva"} to={"/alva"} />
                <DivContainers  title={"Locqube"} to={"/locqube"} />
            </ul>
        </div>
    )
}

export default App