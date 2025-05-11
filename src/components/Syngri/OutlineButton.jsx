import React from "react";

const OutlineButton = ({children, className}) => {
    return (
        <button className={"outline-button " + className}>{children}</button>
    )
}

export default OutlineButton