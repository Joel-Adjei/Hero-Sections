import React from "react";
import ImageCircles from "./ImageCircles";
import {img01Female , circleImg1 , circleImg2 , circleImg3 , circleImg4} from "./constant";


const Backdrop = () => {

    return (
        <div style={{zIndex: 0}} className={`w-[85%] right-10 lg:w-190 h-82  lg:h-140 absolute bottom-0 right-0 bg-blue-90 z-0 overflow-hidden
                                                sm:w-110 sm:h-90 sm:right-27 md:w-[65%] md:h-[85%] md:right-0`}>
            <div  className={"w-full h-full md:h-full absolute right-0 bottom-0 z-0" }>
                <img
                    className={"w-180  right-0  md:w-300 lg:w-200 absolute   md:right-[-50px] bottom-0 z-0"}
                    src={img01Female}
                />

                <ImageCircles src={circleImg1}  size={345} className={"size-13 sm:size-17 lg:size-20 right-9 top-[31%]"} />
                <ImageCircles src={circleImg2} size={245} className={"size-7 sm:size-9 lg:size-10 left-18 top-[33%]"} />
                <ImageCircles src={circleImg3} size={245} className={"size-9 sm:size-11 lg:size-15 left-[30%] top-[11%]"} />
                <ImageCircles src={circleImg4} size={245} className={"size-9 sm:size-11 lg:size-15 right-35 top-[17%]"} />
            </div>

        </div>
    )
}

export default Backdrop