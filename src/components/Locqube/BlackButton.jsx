import React from "react";

const BlackButton = ({title , className}) => {

    return (
        <button className={"px-4 py-3 cursor-pointer rounded-xl bg-black text-white "+ className}>
            {title}
        </button>
    )
}

export default BlackButton