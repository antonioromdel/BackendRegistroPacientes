import { checkDatas, checkEmail } from "../helpers/helpers.js"
import Patient from "../models/model.js"

const getDatas = async (req, res) => {

    try{
        let myPatients = await Patient.find()

        return res.status(200).json({
            status: "succes",
            data: myPatients
        })

    } catch (error) {
        return res.status(404).json({
            status: `Error, ${error}`,
            data: "No hay artículos guardados"
        })
    }
    
}

const savePatient = async (req, res) => {

    let params = req.body
    const { _id, name, takecare, sintomas, email, date} = params
    const patient = new Patient(params)

    try{

        if(!checkDatas(params)) {
            return res.status(400).json({
                status: "Error",
                message: "Todos los campos deben de estar llenos"
            })
        }

        if(!checkEmail(email)){
            return res.status(400).json({
                status: "Error",
                message: "Email no válido."
            })
        }

        const checkPatient = await Patient.findById(_id)
        if(checkPatient){
            return res.status(400).json({
                status: "Error",
                message: "Id del paciente ya existe."
            })
        }

        patient.save()

        return res.status(200).json({
            status: "succes",
            patient: patient,
            message: "Paciente guardado correctamente."
        })

    } catch (error) {
        return res.status(400).json({
            status: `Error, ${error}`,
            message: "No ha sido posible guardar los datos"
        })
    }

}

const deletePatient = async (req, res) => {

    let id = req.params.id

    try{

        await Patient.deleteOne({_id: id})
        const query = await Patient.find()

        return res. status(200).json({
            status: "succes",
            data: query,
            message: "Paciente eliminado correctamente."
        })

    } catch (error) {
        return res.status(400).json({
            status: `Error, ${error}`,
            message: "Paciente no encontrado"
        })
    }

}

export const controller = {
    getDatas,
    deletePatient,
    savePatient

}