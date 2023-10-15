//orchestrate the middlewares

import express from "express";
import cors from "./cors";

export default [
    cors,
    express.json()
];