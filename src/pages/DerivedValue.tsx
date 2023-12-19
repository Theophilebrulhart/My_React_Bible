import React, { useEffect, useState } from "react"
import { Container } from "../components/Container";
import { Button } from "../components/Button";

const PRICE_PER_ITEM = 5;

export function DerivedValue() {

    const [quantity, setQuantity] = useState(0);
    const [statePrice, setStatePrice] = useState(0);
    const price = quantity * PRICE_PER_ITEM;

    const handleClick = () => {
        setQuantity((prev) => prev + 1);
    }

    // Dont create a useState to hold your price variable => thats uncessary ! 
    useEffect(() => {
        setStatePrice(quantity * PRICE_PER_ITEM);
    } , [quantity])


    return (
        <Container col={true}>
                <Button label="Add 1 item" handleClick={handleClick}/>
                <h2>Price = {price}</h2>
                <h2>Price with UseState and useEffect = {statePrice}</h2>
                <p className="p-10">Don't use a useState to hold the price variable. It's unecessary. You can just create a normal const variable because
                    every time you click on the button, the useState that handle the quantity, will rerender the component. That means
                    that the compiler will read the component from the begining again. The UseState quantity will be updated. So we can just
                    create a basic const variable that says "const price = quantity * PRICE_PER_ITEM"
                </p>
        </Container>
    )
}