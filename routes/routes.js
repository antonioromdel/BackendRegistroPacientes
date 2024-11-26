import { Router } from "express"
export const router = Router()
import {controller} from "../controllers/controller.js"

router.get("/getDatas", controller.getDatas)
router.post("/savePatient", controller.savePatient)
router.delete("/deletePatient/:id", controller.deletePatient)
