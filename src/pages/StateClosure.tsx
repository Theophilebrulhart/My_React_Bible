import React, { useEffect, useState } from "react";
import { Container } from "../components/Container";

export function StateClosure(){
    const [noDep, setNoDep] = useState(0);
    const [withDep, setWithDep] = useState(0);
    const [withcleanUp, setWithCleanUp] = useState(0);
    const [withPrev, setWithPrev] = useState(0);


    useEffect(()=> {
        setInterval(() => {
            console.log("Interval without depedency");
            setNoDep(noDep + 1);
        }, 1000)
    }, [])

    useEffect(()=> {
        setInterval(() => {
            console.log("Interval with depedency");
            setWithDep(withDep + 1);
        }, 1000)
    }, [withDep])

    useEffect(()=> {
        const i = setInterval(() => {
            console.log("Interval with index and clean up");
            setWithCleanUp(withcleanUp + 1);
        }, 1000)

        return () => {
            clearInterval(i);
        }
    }, [withcleanUp])

    useEffect(()=> {
        setInterval(() => {
            console.log("Interval with prev");
            setWithPrev((prev) => prev + 1);
        }, 1000)
    }, [])

    useEffect(() => {
        console.log("adalut");
    }, []);

    return (
        <Container col={true}>
            <h1>Each of this counter as an interval that increase every second</h1>
            <div className="w-full flex items-center flex-col">
                <h2 className="text-xl">No dependency Count: {noDep}</h2>
                <p className="p-4  mx-6 bg-black/20 border-2  border-white">Théorie : Here, the interval function is created at function time. Function initialize their value at their creation.
                    That means that the count value will always stay 0 when the function is launched bc the function is never recreated.
                    So we have to find a way to recreate the function each time we call it.
                </p>
            </div>
            <div className="w-full flex items-center flex-col">
                <h2 className="text-xl">With dependency Count: {withDep}</h2>
                <p className="p-4  mx-6 bg-black/20 border-2  border-white">Théorie : Look at the console.log... completly out of 
                hands. Well this is due because we do create new function each time, but we don't delete the old one. That means we are
                just adding another interval each time.
                </p>
            </div>
            <div className="w-full flex items-center flex-col">
                <h2 className="text-xl">With index and clean up: {withcleanUp}</h2>
                <p className="p-4  mx-6 bg-black/20 border-2  border-white">Théorie : This work bu isn't the best practice. That way, we use the
                cleanup property of the useEffect. That cleanup fonction is called whenever the component is unmounted or before the 
                next UseEffect call. That work, but their is much easier.
                </p>
            </div>
            <div className="w-full flex items-center flex-col">
                <h2 className="text-xl">With prev : {withPrev}</h2>
                <p className="p-4  mx-6 bg-black/20 border-2  border-white">Théorie : This work bu isn't the best practice. That way, we use the
                cleanup property of the useEffect. That cleanup fonction is called whenever the component is unmounted or before the 
                next UseEffect call. That work, but their is much easier.
                </p>
            </div>

        </Container>
    )
}