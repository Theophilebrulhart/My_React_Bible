import React, { useState } from "react";
import { Button } from "../components/Button";
import { Container } from "../components/Container";

export function UseStatePrev () {

    const [countPrev, setCountPrev] = useState(0);
    const [count, setCount] = useState(0);
    const [showRespons, setShowRespons] = useState(false)
    const [showResponsPrev, setShowResponsPrev] = useState(false)

    const withoutPrev = () => {
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        setShowRespons(true);
    }
    const withPrev = () => {
        setCountPrev((prev) => prev + 1);
        setCountPrev((prev) => prev + 1);
        setCountPrev((prev) => prev + 1);
        setCountPrev((prev) => prev + 1);
        setShowResponsPrev(true);
    }

    return (
        <>
            <Container>
                <div className="w-full h-1/2 border-b border-black/40 flex flex-row">
                    <div className="w-1/4 h-full flex  p-4 justify-center items-center bg-black/80">
                        <p className="text-white">Here, in the handleClick function of the button, we do  : setCount(count + 1)</p>
                    </div>
                    <div className=" w-2/4 h-full flex justify-around items-center flex-col  p-4">
                        <p>This button set 4 time the value in the same function. Will it increment it by 4 each time ?</p>
                        <Button handleClick={withoutPrev} label={"Click me"}/>
                        <p>Count is : {count}</p>
                    </div>
                    <div className="w-1/4 h-full flex  p-4 justify-center items-center bg-black/80">
                        {showRespons && 
                            <p className="text-white">This doesn't work because useState work as a promise. Whenever we use the set function, it schedule do to it in the future. But at that moment, the value isn't changed yet. So if we use it right after, count will still be the old value. So we are always adding 1 to the same value which is 0 in this case.</p>
                        }
                    </div>
                </div>
                <div className="w-full h-1/2 border-b border-black/40 flex flex-row">
                    <div className="w-1/4 h-full flex bg-black/80 justify-center items-center p-4">
                    <p className="text-white">Here, in the handleClick function of the button, we do setCount((prev) = prev + 1)</p>
                    </div>
                    <div className=" w-2/4 h-full flex justify-around items-center flex-col  p-4">
                        <p>This button set 4 time the value in the same function. Will it increment it by 4 each time ?</p>
                        <Button handleClick={withPrev} label={"Click me"}/>
                        <p>Count is : {countPrev}</p>
                    </div>
                    <div className="w-1/4 h-full flex bg-black/80 justify-center items-center p-4">
                    {showResponsPrev && 
                            <p className="text-white">This works because when we use prev, we tell useState to use the latest updated value. So if he still have some pending action to do, it will do them and then do the next action.</p>
                        }
                    </div>
                </div>
                
            </Container>
        </>
    )
}