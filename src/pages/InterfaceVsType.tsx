import React from "react";
import { Container } from "../components/Container";

type CardProps = {
    title : string;
    text: string;
    caseNbr : number;
}

export function InterfaceVsType () {

    return (
        <Container>
            <h1 className="text-2xl my-3">Take a look at the code for exemple</h1>
            <div className="w-full h-4/5 flex flex-wrap justify-evenly flex-row over">
                <CaseCard caseNbr={1} title={"Typing primitive value"} text={"Interface can only be used on an object. You can't type a primitiv value."}/>
                <CaseCard caseNbr={2} title={"Union"} text={"Type alias can also describe union types where interface cannot"}/>
                <CaseCard caseNbr={3} title={"Omit"} text={"Type alias is cleaner when you want to omit a value from an extended type"}/>
                <CaseCard caseNbr={4} title={"Multiple type array"} text={"Type alias is way cleaner when it comes to create array containing multiple types"}/>
                <CaseCard caseNbr={5} title={"Extracting type from smth else"} text={"Type alias is easier to pull out nested object using the typeof alias. (side note : you can use - as const - to set the value as ReadOnly)"}/>
                <CaseCard caseNbr={6} title={"Duplicate name"} text={"Interface alias are open. Which means if you redeclare an interface with the same name, you want get an error and both interface will be merged. Could lead to inpredictable behavior."}/>
            </div>
        </Container>
    )
}

const CaseCard = ({title, text, caseNbr} : CardProps) => {

    return(
        <div className="h-1/2 w-80 bg-black/80 p-6 rounded-xl flex justify-around items-center flex-col mt-2">
        <h1 className="text-white text-xl">Case : {caseNbr}</h1>
        <h1 className="text-white text-xl">{title}</h1>
        <p className="text-white">{text}</p>
    </div>
    )
}


///////////////////////////////////////////////////////////
// ------ case 1  ---------------------------------------//
///////////////////////////////////////////////////////////

    // with Type
        type Address = string | string[];

        const newAddress : Address = "Route du chemin 45";

    // with Interface
        interface Address2 {
            address : string;
        }

        const newAddress2 : Address2 = {
            address : "Route du chemin 46",
        }

///////////////////////////////////////////////////////////
// ------ case 2  ---------------------------------------//
///////////////////////////////////////////////////////////

    // with Type
        type Address3 = string | string[];

        const newAddress3 : Address = ["Route du chemin 45", "Chemin de la route 54"];

    // with Interface
        //impossible

///////////////////////////////////////////////////////////
// ------ case 3  ---------------------------------------//
///////////////////////////////////////////////////////////

    // with Type
        type UserProps = {
            name : string,
            city : string,
            address : number,
        }

        type GuestProps = Omit<UserProps, "name" | "city">;

    // with Interface
        interface GuestProps2 extends Omit<UserProps, "name" | "city">{}

///////////////////////////////////////////////////////////
// ------ case 4  ---------------------------------------//
///////////////////////////////////////////////////////////

    // with Type
        type User = [number, string, boolean]
        const user : User = [1, "Jason", true];

    // with Interface
        interface User2 extends Array<number | string | boolean>{
            0 : number;
            1 : string;
            2 : boolean;
        }   

        const user2 : User2 = [1, "Jason", true];

///////////////////////////////////////////////////////////
// ------ case 5  ---------------------------------------//
///////////////////////////////////////////////////////////

    // with Type
    
    const randomObj = {
        someValue : "value",
        nestedObj : {
            nestedValue : 300,
            nestedValue2 : "string"
        },
    } as const

    type nestedObj = typeof randomObj["nestedObj"]

///////////////////////////////////////////////////////////
// ------ case 6  ---------------------------------------//
///////////////////////////////////////////////////////////

    // with Type
    
    type Delivery = {
        price : number;
        address : string;
    }

    type Delivery2 = Delivery & {
        quantity : number;
    }

    const randomDelivery : Delivery2 = {
        price : 1,
        address: "chemin de la route 4",
        quantity : 2,
    }

    //with interface

    interface IDelivery  {
        price : number;
        address : string;
    }

    interface IDelivery  {
        quantity : number;
    }

    const IrandomDelivery : IDelivery = {
        price : 1,
        address: "chemin de la route 4",
        quantity : 2,
    }