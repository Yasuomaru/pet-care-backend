import { Router, Response, Request } from "express";
import PetController from "../controller/PetController";


const router = Router()

//Pets api routes
router.get("/pets", PetController.index)
router.get("/pets/:id", PetController.show)
router.post("/pets", PetController.create)
router.put("/pets/:id", PetController.update)
router.delete("/pets/:id", PetController.delete)


export default router;