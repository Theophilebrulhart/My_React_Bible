import React, { Component, useEffect, useState } from "react";
import { Container } from "../components/Container";

export function CustomHooks(){

    return (
        <Container col={true}>
            <ComponentOne/>
            <ComponentTwo/>
        </Container>
    )
}

// This function will be needed in both component. So we create a custom hook with it. 
// The function name start with "use" to show that this function use hooks. 
const useWindowSize = () => {

    const [windowSize, setWindowSize] = useState(1920)
    
    useEffect(() => {
        const handleWinSizeChange = () => {
            setWindowSize(window.innerWidth);
        }
        window.addEventListener("resize", handleWinSizeChange);
        
        // UseEffect has a return property that is called when the composent is unmount.
        return () => {
            window.removeEventListener("resize", handleWinSizeChange);
        }
    }, [])
    
    return (windowSize)
}

function ComponentOne(){

    //Now, we can use this function wherever we want just like that
    const windowSize = useWindowSize();

    return (
        <h1>Component 1... look at the code</h1>
    )
}
function ComponentTwo(){

    const windowSize = useWindowSize();

    return (
        <h1>Component 2... Look at the code</h1>

    )
}