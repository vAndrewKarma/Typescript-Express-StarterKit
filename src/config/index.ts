import dotenv from "dotenv";

const envFound = dotenv.config();

if (envFound.error) {
  console.warn(".env missing, ignore if u are in workflow");
}

process.env.NODE_ENV = process.env.NODE_ENV || "development";

export default {
  env: process.env.NODE_ENV,
  client: process.env.CLIENT,
  app: {
    port: process.env.PORT,
  },
};
