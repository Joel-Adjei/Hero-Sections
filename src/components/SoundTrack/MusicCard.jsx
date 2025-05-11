import React from "react";


const MusicCard = ({src, title, description}) => {

    return (
        <div className={"w-[365px] flex flex-col gap-1 p-2 font-[Montserrat]"}>
            <img className={"w-[100%] h-30 rounded-lg  object-cover object-center"} src={src} />
            <h4 className={"text-lg font-bold text-gray-700"}>{title}</h4>
            <p className={"text-sm font-light mt-[-5px]"}>{description}</p>
        </div>
    )
}

export default MusicCard