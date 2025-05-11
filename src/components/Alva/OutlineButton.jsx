import React from "react";

const OutlineButton = ({title}) => {

    return (
        <button className={"px-7 py-2 border-1 border-gray-100 cursor-pointer text-sm rounded-full bg-white text-black"}>
            {title}
        </button>
    )
}

export default OutlineButton