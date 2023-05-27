import dotenv from "dotenv";

const envFound = dotenv.config();

if (envFound.error) {
  throw new Error("No .env file found");
}

process.env.NODE_ENV = process.env.NODE_ENV || "development";

export default {
  env: process.env.NODE_ENV,
  client: process.env.CLIENT,
  app: {
    port: process.env.PORT,
  },
};
