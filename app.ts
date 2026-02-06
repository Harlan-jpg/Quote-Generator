import express, { request } from 'express';
import cors from "cors"
import morgan from "morgan";
import { QueryCompositeFilterConstraint } from 'firebase/firestore/lite';

interface Quote{
     message: String
     author: string
     title: string | undefined
}

let item: Quote[] =[
     {
          message: "Some Message goes her", author: "me", title: undefined
     },

          {
          message: "If A dog is a dog is a cat a cat ", author: "smart man", title: undefined
     }
]

const app = express()
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.get('/', (request, response) => {
     response.send("Welcome to the quote sever")
})

app.get('/getDailyJoke', (request, response) => {
     const randomQuote: Quote = item[Math.floor(Math.random() * item.length)]
     response.send(randomQuote)
})
app.post('/addDailyJoke', ( request, response) => {
     // Title, AUthor, Message
    const quote: Quote = request.body
     console.log(`Title: ${quote.title}, Author: ${quote.author}, Message: ${quote.message}`);

      if(!quote.author || !quote.author) {
          return response.status(400).send({
               "Status": "Failed"
          })
     }
     if(!quote.message || !quote.message) {
          return response.status(400).send({
               "Status": "Failed"
          })
     }

     item.push(quote)
     response.send({
          title: quote.title,
          author: quote.author,
          message: quote.message,
     })
     })

app.listen(3000, () => {
    console.log(`Server is Listening on 3000`)
}) 