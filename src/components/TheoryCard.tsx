import React from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import 'tailwindcss/tailwind.css';

type TheoryCardProps = {
    tags : string[],
    title : string,
    link : string,
    description : string,
}

export function TheoryCard({tags, title, link, description} : TheoryCardProps) {

    const navigate = useNavigate();

    const handleNav = () => {
        navigate(link);
    }

    return (
        <button 
            className="bg-black/90 p-3 w-72 m-3 rounded-md hover:bg-black/70 hover:transform hover:scale-110 transition duration-300"
            onClick={handleNav}

        >
            <h2 className="text-white mb-2">{title}</h2>
            <div className="w-full flex justify-around flex-wrap">
                {tags.map((tag, index) => {
                    return (
                        <text className="text-black mb-1 bg-white/70 text-xs border-white/50 p-1 rounded-md">{tag}</text>
                        )
                    } )}
            </div>
            <div className="border p-2 rounded-sm border-white mx-3 my-2">
                <p className="text-white/40 text-xs">{description}</p>
            </div>
        </button>
    )
}