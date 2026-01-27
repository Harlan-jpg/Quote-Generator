import express from 'express';

const app = express()

app.get('/', (request, response) => {
     response.send("Welcome to the quote sever")
})

app.get('/getDailyJoke', (request, response) => {
     response.send({
        title: "Our fist Quote",
        message: "lorem ipsum dolar emit",
        author: "ME!",
     })
})
app.listen(3000, () => {
    console.log(`Server is Listening on 3000`)
}) 