import dotenv from "dotenv";
import { logger } from "./logger";
const envFound = dotenv.config();

if (envFound.error) {
  logger.error("test 2 ");
}

process.env.NODE_ENV = process.env.NODE_ENV || "development";

export default {
  env: process.env.NODE_ENV,
  client: process.env.CLIENT,
  app: {
    port: process.env.PORT,
  },
};
