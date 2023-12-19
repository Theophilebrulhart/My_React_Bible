import React, { ChangeEvent, useState } from "react";
import { Container } from "../components/Container";

type user = {
    name : string,
    city : string,
    age : number
}

export function UpdatingObjectState() {

    const [user, setUser] = useState<user>({
        name : "",
        city : "",
        age : 50,
    })

    const handleOnChange = (event : ChangeEvent<HTMLInputElement> ) => {
        // first case that doesn't work => setUser wait for an object and not a single string;
        // setUser((user.name = event.target.value));

        // second case that doesn't work => in that case we would overwrite the user object with a new object only containing the name variable
        // setUser({
        //     name: event.target.value,
        // })

        // third case that work => here, we first spread all the content of the user variable to be sure we take all the fields it contains
        // setUser({
        //     ...user,
        //         name: event.target.value,
        //     })

        // Forth case is best practice => we make sure we take all the content with the latest updated values by spreading prev
        // setUser((prev) => {
        //     return {
        //         ...prev,
        //         name : event.target.value
        //     }
        // })

        // Fifth case best practice => modifie different value from the same object in one fonction using the name property 
        setUser((prev) => {
                return {
                    ...prev,
                    [event.target.name] : event.target.value
                }
            })  

    }

    return (
        <Container>
            <h1>The best practice to update object values. Take a look at the code to see different exemple</h1>
            <div className="flex flex-col">
                <form>
                    <input 
                        type="text"
                        name="name"
                        onChange={handleOnChange}
                        placeholder="Type your name"
                        className="border p-2">
                    </input>
                    <input 
                        type="text"
                        name="city"
                        onChange={handleOnChange}
                        placeholder="Enter your city"
                        className="border p-2">
                    </input>
                    <input 
                        type="text"
                        name="age"
                        onChange={handleOnChange}
                        placeholder="Enter your age"
                        className="border p-2">
                    </input>
                </form>
                <h2>current name : {user.name}</h2>
                <h2>current city : {user.city}</h2>
                <h2>current age : {user.age}</h2>

            </div>
        </Container>
    )
}