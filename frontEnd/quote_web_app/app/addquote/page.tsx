"use client"
import { useState } from "react";
import { addQuoteToServer } from "@/app/APIClient";

export default function AddQuote() {
    const [title, setTitle] = useState<string>("");
    return (
        <>
        <h1 >add quote</h1>
        <input type="text" placeholder="title" onChange={(e)=> setTitle(e.target.value)} />
        <button onClick={()=> {
            addQuoteToServer(title, "", "")
        }}>Submit</button>
        </>
    )
}
