import React, {useRef} from "react";
import {Link} from "react-router";
import {soundTrackImg, syngriImg} from "./components/SoundTrack/constant";


function DivContainers ({title , to , src , color= "bg-black"}){
    return(
        <li >
            <Link
                className={ "border-4 border-gray-300 relative overflow-hidden cursor-pointer bg-blue-300 h-25 sm:h-45 flex items-center justify-center rounded-xl"}
                to={to}>
                <div className={"size-full absolute 10  z-10 opacity-[55%] hover:opacity-[15%] " + color}> </div>
                <img className={"w-220 absolute object-cover object-center hover:mb-2 z-0"} src={src}/>
                <p className={"text-xl text-white font-extrabold font-[Montserrat] z-20"}>{title}</p>
            </Link>
        </li>
    )
}
const App = () => {
    return (
        <div>
            <div className={"h-100 relative w-full flex items-center justify-center overflow-hidden font-bold mb-3 "}>
                <div className={"size-full absolute 10  z-10 bg-black opacity-[25%] hover:opacity-[45%] z-10"}> </div>

                <div className={"absolute bottom-[-20px] left-3 w-120 z-0"}>
                    <img className={"w-full rounded-lg "} src={soundTrackImg} />
                </div>
                <h2 className={"text-6xl z-20" }>All Hero Sections</h2>
            </div>

            <ul className={"grid grid-cols-2 md:grid-cols-3 gap-3 px-4 py-2"}>
                <DivContainers color={"bg-purple-900"} src={syngriImg} title={"Syngri"} to={"/syngri"} />
                <DivContainers color={"bg-green-900"} src={soundTrackImg} title={"SoundTrack"} to={"/soundtrack"} />
                <DivContainers  title={"Alva"} to={"/alva"} />
            </ul>
        </div>
    )
}

export default App