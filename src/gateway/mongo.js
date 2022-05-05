import { MongoClient } from "mongodb";

export const getDb = async () => {
  const client = new MongoClient(process.env.MONGO_URL);
  await client.connect();

  return client.db("mongo-express-week3");
};

export const getBlockschainsCollection = async () => {
  const db = await getDb();

  return db.collection("blockchains");
};

export const getSmartContractCollection = async () => {
  const db = await getDb();

  return db.collection("smartcontracts");
};
