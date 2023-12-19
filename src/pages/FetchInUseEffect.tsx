import React, { useEffect, useState } from "react";
import { Container } from "../components/Container";
import { Button } from "../components/Button";
import { sign } from "crypto";

type Props = {
    id : number;
}

type dataType = {
    body : string
}

export function FetchInUseEffect (){

    const [simpleFetch, setSimpleFetch] = useState(1);
    const [cleanFetch, setCleanFetch] = useState(1);

    return (
        <Container>
            {/* <div className="w-full flex flex-col justify-between p-4 items-center">
                <Button label="Show me a post" handleClick={() => setSimpleFetch(Math.floor(Math.random()*100))}/>
                <SimpleFetch id={simpleFetch}/>
            </div> */}
            <div className="w-full flex flex-col justify-between p-4 items-center">
                <Button label="Show me clean post" handleClick={() => setCleanFetch(Math.floor(Math.random()*100))}/>
                <CleanerFetch id={simpleFetch}/>
            </div>
        </Container>
    )
}

export function SimpleFetch({id} : Props) : JSX.Element {

    const [text, setText] = useState<string>("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        fetch(`https://dummyjson.com/posts/${id}`)
        .then((res) => res.json())
        .then((data : dataType) => setText(data.body));
        setLoading(false);
    }, [id]);

    return (
        <div>
            {loading ? 
                <h1>LOADING...</h1>
            :
                <p>{text}</p>
            }
        </div>
    )
}

export function CleanerFetch({id} : Props) : JSX.Element {
    console.log("salut")

    const controller = new AbortController();
    const signal = controller.signal;

    const [text, setText] = useState<string>("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const respons = await fetch(`https://dummyjson.com/posts/${id}`, {signal})
                .then((res) => res.json())
                .then((data : dataType) => setText(data.body));
                setLoading(false);
            }
            catch (error){
                console.log("error : ", error);
            }
        }
        fetchData();
            return () => {
                controller.abort();
            }
    }, [id]);

    return (
        <div>
            {loading ? 
                <h1>LOADING...</h1>
            :
                <p>{text}</p>
            }
        </div>
    )
}