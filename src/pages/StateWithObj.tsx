import React, { useEffect, useState } from "react";
import { Container } from "../components/Container";

type Post ={
    title: string;
    body: string;
}

export function StateWithObject (){
    // it's a good practice to set the useState to null at first
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dummyjson.com/post/1")
        .then((res) => res.json())
        .then((data: Post) => {
            setPost(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            setLoading(false);
        });
    }, []);

    return (
        <Container>
            {loading ? (
                <h1>Loading</h1>
            ) : (
                post ? (
                    <div>
                        <h1 className="mb-10">TITLE: {post.title}</h1>
                        <p className="p-10">{post.body}</p>
                    </div>
                ) : (
                    <h1>No post found</h1>
                )
            )}
        </Container>
    )
}
