import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mainRouter from "./router";
import middlewares from "./middlewares";

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 8000;

middlewares.forEach(middleware => {
    app.use(middleware)
})

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
})

app.use(mainRouter)

app.listen(port, () => console.log(`Server running on port http://localhost:${port}`));