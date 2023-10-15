import { Router } from "express";
import apiRouter from "./api";
import swaggerRouter from "./swagger";

const mainRouter = Router()

mainRouter.use("/docs", swaggerRouter)
mainRouter.use("/api", apiRouter)

export default mainRouter;