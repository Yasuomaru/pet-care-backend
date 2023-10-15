import { Router } from "express";
import apiRouter from "./api";

const mainRouter = Router()

mainRouter.use("/api", apiRouter)

export default mainRouter;