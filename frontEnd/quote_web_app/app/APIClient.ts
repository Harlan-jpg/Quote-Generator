import { Item } from "./object/quote";

export function getQuoteFromSever(){
    return new Promise<Item>((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_HOST}/getDailyJoke`)
            .then((res) => res.json())
            .then((result: Item) => {
                resolve(result)
            })
            .catch((error)=>{
                alert("Womp Womp Sever is down sory 👉👈")
                reject(error)
            })
        })
    }

export function addQuoteToServer(title: string | undefined, author: string, message: string) {
    return new Promise<Item>((resolve, reject) => {
        fetch(`${process.env.NEXT_PUBLIC_HOST}/ADDDailyJoke`, {
            method: 'POST',
            body: JSON.stringify({
                title, 
                author, 
                message
            })
        
        })
        .then((res) => res.json())
        .then((result: Item) => {
            resolve(result)
        })
        .catch((error)=>{
            alert("Womp Womp Sever is down sory 👉👈")
            reject(error)
        })
    })
}