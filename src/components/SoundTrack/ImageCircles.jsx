import React from "react";


const ImageCircles = ({src , size , className}) => {

    return (
        <div className={`rounded-full border-2 border-white overflow-hidden absolute shadow-md ${className}` }>
            <img className={"object-fill object-center "+ className} width={size} src={src}/>
        </div>
    )
}

export default ImageCircles