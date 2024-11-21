import path from 'path'
import express from 'express'
import { fileURLToPath } from 'url'

const app = express()
const PORT = 3000

app.use(express.json())

const users = [
    {id: 1, name: "Adel"},
    {id: 2, name: "Adella"},
    {id: 3, name: "Adeli"},
    {id: 4, name: "Adelo"},
    {id: 5, name: "Adelna"},
    {id: 6, name: "Adelma"},
    {id: 7, name: "Adelka"},
    {id: 8, name: "Adelca"},
    {id: 9, name: "Adelfa"},
    {id: 11, name: "Adeljo"},
    {id: 12, name: "Adelpo"},
]



app.get("/hello",(req, res,next) => {
    res.send("Hello freundin!!")
})


app.get("/hello",(req, res,next) => {
    res.send("Hello frined!!")
})



app.get("/hello",(req, res,next) => {
    res.send("Hello tomodachi!!")
})




const root = path.join(path.dirname(fileURLToPath(import.meta.url)))
app.get("/",(req,res)=> {
    res.sendFile(path.join(root,'index.html'))

})

app.get("/users",(req,res) =>{
    res.json(users)
})




app.listen(3000, () => {console.log('server is running on port 3000')})