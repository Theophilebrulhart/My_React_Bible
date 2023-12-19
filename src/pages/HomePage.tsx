import React from "react";
import 'tailwindcss/tailwind.css';
import { TheoryCard } from "../components/TheoryCard";
import pagesData from "../pagesData.json"

const tags = {
    UseEffect : "useEffect",
    UseState : "useState",
    Racing : "racing",
    Typescript : "typescript"
}

export function HomePage  ()  {

    return (
        <div className="w-screen h-screen bg-gray-200 flex flex-col items-center">
            <header className="w-full bg-black/40 flex justify-center h-1/6 items-center">
                <h1 className="text-2xl font-bold text-white">
                    React Theory
                </h1>
            </header>
            <div className=" w-4/5 h-4/5 flex justify-between items-center flex-wrap mt-4 overflow-scroll">
               {pagesData.map((page, index) => {
                return (<TheoryCard 
                        title={page.title}
                        description={page.description}
                        tags={page.tags}
                        link={page.link}/>)
               })}
            </div>
        </div>
    )
}