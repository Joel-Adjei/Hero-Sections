import React from "react";

const SolidButton = ({children, className}) => {
    return (
        <button className={"solid-button " + className}>{children}</button>
    )
}

export default SolidButton