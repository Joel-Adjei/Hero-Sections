import React from "react";
import { envato , spotify , airbnb , slack , zoom } from "./constant"

const allLogos = [ slack , zoom , airbnb , spotify , envato  ]
const BottomLogos = () => {

    return (
        <div className={"flex w-full items-center justify-between opacity-[60%]"}>
            {
                allLogos.map(( items)=>(
                    <img
                        className={"w-15 sm:w-20 md:w-25"}
                        key={Math.random()}
                        src={items}/>
                ))
            }
        </div>
    )
}

export default BottomLogos