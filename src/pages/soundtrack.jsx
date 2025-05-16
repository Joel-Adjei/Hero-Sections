import React from "react";
import {useNavigate} from "react-router";
import NavBar from "../components/SoundTrack/NavBar";
import HeroText from "../components/SoundTrack/HeroText";
import EmailInput from "../components/SoundTrack/SearchBar";
import Backdrop from "../components/SoundTrack/Backdrop";
import MusicCard from "../components/SoundTrack/MusicCard";
import {circleImg4, music, popularSongs} from "../components/SoundTrack/constant";
import PopularSongs from "../components/SoundTrack/PopularSongs";
const SoundTrack = () => {
    const navigator = useNavigate()
    return (
        <div className={"h-[100vh] w-full bg-white-100 p-2"}>

            <div className={"relative w-full h-[90%] sm:h-140 md lg:h-[90%] bg-gray-300 rounded-lg mb-3"}>
                <Backdrop />

                <NavBar />

                <div className={"w-[100%] pt-13 px-3 md:pl-10 md:w-[65%] md:pt-15 lg:w-[45%] lg:pl-23  z-10 "}>
                    <div className={" text-center w-[100%] md:text-left "}>
                        <HeroText />
                    </div>
                    <div className={"z-20 absolute left-0 mt-45 w-full px-7 md:w-[70%] md:left-11 md:px-0 md:mt-10 lg:w-[60%] md:left-18 md:mt-18"}>
                        <EmailInput />
                    </div>


                </div>


            </div>

            <div className={"flex flex-col md:flex-row gap-10 mt-10"}>
                <div className={"py-3 flex flex-1 overflow-x-scroll"}>
                    {
                        music.map((value)=>
                            <MusicCard title={value.title} description={value.desc} src={value.img} />
                        )
                    }
                </div >

                <div  className={" px-4"} >
                    <h2 className={"font-[Montserrat] text-green-900 font-bold text-xl mb-2"}>Weekly Popular Songs</h2>
                    <div  className={"h-40 flex flex-col gap-2 overflow-y-scroll"}>
                        {
                            popularSongs.map(({id , title , desc})=>
                                <PopularSongs id={id} title={title} description={desc} />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SoundTrack