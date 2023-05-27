import dotenv from "dotenv";
import { logger } from "./logger";

const envFound = dotenv.config();

if (envFound.error) {
  logger.warn(".env file not found. If you are on an action ignore");
}

process.env.NODE_ENV = process.env.NODE_ENV || "development";

export default {
  env: process.env.NODE_ENV,
  client: process.env.CLIENT,
  app: {
    port: process.env.PORT,
  },
};
