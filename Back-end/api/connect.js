import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://pregadorismael:3ZDYTR872Tk6ySjW@cluster1.t9fnsmc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

const client = new MongoClient(URI);

export const db = client.db("ProjetoSpotify");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
