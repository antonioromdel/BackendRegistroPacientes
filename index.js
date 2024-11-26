import express from "express"
import cors from "cors"
import {router} from "./routes/routes.js"
import { connect } from "./db/db.js"

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api", router)

connect()   

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`)
})