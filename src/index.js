import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { blockchainRouter } from "./routes/blockchain.route.js";

dotenv.config();
const app = express(); // set up express servuse
app.use(express.json());
app.use(cors());
app.use(blockchainRouter);

app.listen(3030, () => {
  console.log("Listening on http://localhost:3030 port");
});
