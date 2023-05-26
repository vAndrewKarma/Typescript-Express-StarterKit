import express from "express";
import cors from "cors";
import type { Express } from "express";
import { NotFoundHandler, GlobalErrorHandler } from "../config/routehandle";
import { logger } from "../config/logger";
export default async function ({ app }: { app: Express }) {
  const clients = ["http://localhost:3000"]; // i will use a random client, but here you configure the clients which can use your api
  const corsopt = {
    // btw here's a tip, never use cors() cause you basically allow requests for any client, and let's say it is not the best practice if you are building an api
    credentials: true,
    allowedHeaders: [
      "Authorization",
      "Content-type",
      "Content-Lenght",
      "Origin",
    ],
    origin: function (
      origin: string,
      callback: (arg0: Error, arg1: boolean) => void
    ) {
      if (!origin) return callback(null, true);
      if (clients.includes(origin)) {
        // if origin exists in clients
        callback(null, true);
      } else {
        // error logging
        const error = new Error(`${origin} not allowed`);
        logger.error(error);
        callback(error, false);
      }
    },
  };

  app.use(cors(corsopt));

  //ROUTE FOR STATUS CHECKING
  app.get("/alive", (req, res) => res.sendStatus(200)); // a simple status endpoint to check if the server is alive
  app.head("/alive", (req, res) => res.sendStatus(200)); // same thing but we retrieve only response headers

  app.enable("trust proxy"); // show ip which can be behind a reverse proxy

  app.use(express.json()); //  used for handling encoded json data

  app.use(express.urlencoded({ extended: false })); // used for handling url encoded form data like name=Example+Test&age=20

  app.use(NotFoundHandler);
  app.use(GlobalErrorHandler);
}
