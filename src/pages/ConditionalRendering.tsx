import React, { useEffect } from "react";
import { JsxElement } from "typescript";
import { Container } from "../components/Container";

type Props = {
    id ?: number | undefined
}

export function ConditionalRendering({id} : Props ) {
    
    // if (!id) {
    //     return (<Container><h1>it work but ugly ! Also... we can't use a hook after a return... </h1></Container>)
    // }
    // useEffect(() => {}, [])

    return (
        <>
        {!id ? (
            <Container><h1>That way, we only use one return and it's clean</h1></Container>
            ):(
            <Container><h1>Render the component</h1></Container>
        )}
        </>
    )
}