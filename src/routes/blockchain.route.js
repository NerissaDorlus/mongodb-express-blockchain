import { Router } from "express";
import {
  createBlockchain,
  getBlockchain,
  getAllBlockchains,
} from "../services/blockchain.service.js";

export const blockchainRouter = Router();

//post

blockchainRouter.post("/blockchain", async (req, res) => {
  const blockchain = req.body;
  const insertedId = await createBlockchain(blockchain);
  res.status(200).send(insertedId);
});

//getOne
blockchainRouter.get("/blockchain/:name", async (req, res) => {
  const { name } = req.params;
  const blockchain = await getBlockchain(name);
  res.status(200).send(blockchain);
});

//get all
blockchainRouter.get("/blockchain", async (req, res) => {
  const blockchainArray = await getAllBlockchains();
  res.status(200).send(blockchainArray);
});

//Update
