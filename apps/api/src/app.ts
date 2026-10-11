import cors from "cors";
import express from "express";
import helmet from "helmet";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.get("/health" ,(_req,res)=>{
    res.json({status : "ok"})
})

export default app;