import mongoose from "mongoose"

export const connect = async () => {
    try{
        const url = "mongodb://localhost:27017/patients"
        await mongoose.connect(url)
        console.log("Conectado correctamente a la base de datos.")

    } catch (error) {
        console.log(`Error al conectar a la base de datos`)
    }
}

