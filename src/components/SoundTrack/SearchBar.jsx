import React, {useRef, useState} from "react";


const EmailInput = () => {
    const [value , setValue] = useState("")

    return (
        <div className={"relative w-full p-1 bg-white flex items-center rounded-full shadow-lg"}>
            <input
                className={"flex-1 text-[15px] md:text-[17px] md:py-1 pl-3 outline-0 border-0"}
                placeholder={"Enter your email here"} value={value} onChange={(event => setValue(event.target.value))}
            />

            <button className={"md:px-10 p-3 bg-green-900 text-white cursor-pointer font-medium rounded-3xl"}>
                Get Started
            </button>
        </div>
    )
}

export default EmailInput