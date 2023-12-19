import React from "react";

type ButtonProps = {
    handleClick : () => void,
    label : string
}

export function Button({handleClick, label} : ButtonProps ) {

    return (
        <button
            className="bg-blue-500 p-2 w-24 h-12 rounded flex justify-center items-center hover:bg-blue-700 text-white"
            onClick={handleClick}
        >
            {label}
        </button>
    )
}