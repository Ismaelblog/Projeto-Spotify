// API significa Application Programming Interface.
// Há várias requesições: POST, GET, PUT, DELETE.
// CRUD - Create Read Update Delete.

import express, { request, response } from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (request, response) => {
  response.send("Olá Mundo! agora não preciso ficar atualizando");
});

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Servidor esta escutando na porta ${PORT}`);
});
