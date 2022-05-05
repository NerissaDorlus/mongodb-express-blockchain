//create

import { getBlockschainsCollection } from "../gateway/mongo.js";

export const createBlockchain = async (blockchain) => {
  const col = await getBlockschainsCollection();
  const { insertedId } = await col.insertOne(blockchain);
  // Todo: we should validate name is unique;

  return insertedId;
};

//get
export const getBlockchain = async (name) => {
  const col = await getBlockschainsCollection();
  //Todo filter by deletedAtflag so we  dont return deleted blockchains
  const blockchain = await col.findOne({ name });

  return blockchain;
};

//getall
export const getAllBlockchains = async () => {
  const col = await getBlockschainsCollection();
  //Todo filter by deletedAtflag so we dont return deleted blockchains
  const blockchains = await col.find({}).toArray();

  return blockchains;
};

// update
export const updateBlockchain = async (name, updateObject) => {
  const col = await getBlockschainsCollection();
  //Todo: update should not allow the name field to be update
  await col.updateOne({ name }, { $set: updateObject });
};

//soft delete
export const deleteBlockchain = async (name) => {
  await updateBlockchain(name, { deletedAt: new Date() }); //makes data autedable
};
