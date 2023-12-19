import React, { PropsWithChildren } from "react";

type  ContainerProps = {
    col ?: boolean
}

export function Container({children, col} : PropsWithChildren<ContainerProps>) {
    const flexType = col ? "flex-col" : "flex_row"
    const justifyType = col ? "justify-evenly" : "justify-center"

    return (
        <div className="w-screen h-screen flex justify-center items-center bg-black/20">
            <div className={`w-4/5 h-4/5 flex ${justifyType} items-center flex-wrap mt-4 overflow-scroll bg-white rounded-md ${flexType}`}>
                {children}
            </div>
        </div>
    )
}