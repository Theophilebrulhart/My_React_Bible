import React, { useState } from "react";
import { Container } from "../components/Container";
import { Button } from "../components/Button";

export function PrimitiveVsNonPrimitiv (){
    const [bool, setBool] = useState(true);
    const [string, setString] = useState("HI");
    const [number, setNumber] = useState(1);
    const [obj, setObj] = useState({
        number : 100,
        string : "HI",
        bool : true,
    });

    console.log("Component rerender")

    const handleBool= () => {
        setBool(true)
    }
    const handleString= () => {
        setString("HI");
    }
    const handleNumber= () => {
        setNumber(1);
    }
    const handleObj= () => {
        setObj({
            number : 100,
            string : "HI",
            bool : true,
        })
    }
    return (
        <Container col={true}>
            <h2>Those buttons set some State to the same value they already contain.</h2>
            <div className="w-full flex items-center justify-around">
                <div>
                    <Button label={"setBool(true)"} handleClick={handleBool}/>
                    <h3>Bool : {bool}</h3>
                </div>
                <div>
                    <Button label={"setString(HI)"} handleClick={handleString}/>
                    <h3>String : {string}</h3>
                </div>
                <div>
                    <Button label={"setNumber(1)"} handleClick={handleNumber}/>
                    <h3>Number: {number}</h3>
                </div>
                <div>
                    <Button label={"setObj(same)"} handleClick={handleObj}/>
                    <h3>Obj.numer: {obj.number}</h3>
                    <h3>Obj.string: {obj.string}</h3>
                    <h3>Obj.bool: {obj.bool}</h3>
                </div>
            </div>
            <h2>Take a look at the console.log to see when rerendering are done</h2>
            <h2 className="p-6">As you see, when you set the obj, it always rerender the whole component. This is due to the fact that object are
                given by reference and not adress. That means that they aren't truly the same object. They have different adress.
                Be careful to always be aware of that behavior while using Hooks like UseEffect. Putting a non-Primitive value
                as dependency can cause unwanted rerendering. If you want to put an object as dependency, be sure to access a Primitiv
                value of that object.
            </h2>
        </Container>
    )
}