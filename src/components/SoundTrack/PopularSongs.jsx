import React from "react";


const PopularSongs = ({id , title , description}) => {

    return (
        <div className={"flex gap-1 items-center font-[Montserrat]"}>
            <p className={"size-10 font-bold rounded-full text-lg text-green-900 border-1 border-green-900 flex justify-center items-center"}>
                {id}
            </p>
            <div className={"flex flex-col"}>
                <h4 className={"text-md font-bold text-green-900"}>{title}</h4>
                <p className={"text-[13px] font-light text-gray-400"}>{description}</p>
            </div>
        </div>
    )
}

export default PopularSongs