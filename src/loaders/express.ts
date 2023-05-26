import express from "express";
import cors from "cors";
import type { Express } from "express";
import { NotFoundHandler, GlobalErrorHandler } from "../config/routehandle";
export default async function ({ app }: { app: Express }) {
  //ROUTE FOR STATUS CHECKING
  const corsOptions = ["http://localhost:3001"]; // i will use a random client, but here you configure the clients which can use your api

  cors(corsOptions);
  app.get("/alive", (req, res) => res.sendStatus(200)); // a simple status endpoint to check if the server is alive
  app.head("/alive", (req, res) => res.sendStatus(200)); // same thing but we retrieve only response headers

  app.enable("trust proxy"); // show ip which can be behind a reverse proxy

  app.use(express.json()); //  used for handling encoded json data

  app.use(express.urlencoded({ extended: false })); // used for handling url encoded form data like name=Example+Test&age=20

  app.use(NotFoundHandler);
  app.use(GlobalErrorHandler);
}
