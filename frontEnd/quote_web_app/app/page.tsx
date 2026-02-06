"use client"

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

import { Item } from "./object/quote";
import { getQuoteFromSever } from "./APIClient";

export default function Home() {

  const [quote, setQuote] = useState<Item>()

  useEffect(()=>{
    getQuoteFromSever().then((quote)=>{
      setQuote(quote)
    })
  }, [])

  if(!quote){
    return(
      <section>
        <h1 className="font-bold text-5xl flex flex-col items-center justify-center text-white">
          Womp Womp No Quote For You Today Sever Down
        </h1>
      </section>
    )
  }

  return (
    <>
      <section className={`${styles.body} flex flex-col items-center justify-center text-white`}>
        <h2 className="text-5xl font-bold">{quote.title}</h2>
        <p className="text-xl">{quote.message}</p>
        <p className=""><i>{quote.author}</i></p>
      </section>
    </>
  );
}
