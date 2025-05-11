import React, {useRef, useState} from "react";


const SolidButton = ({title}) => {

    return (
        <button className={"px-7 py-2  rounded-full bg-black cursor-pointer text-sm text-white"}>
            {title}
        </button>
    )
}

export default SolidButton