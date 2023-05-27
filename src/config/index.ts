import dotenv from "dotenv";

const envFound = dotenv.config();

if (envFound.error) {
  console.warn(`.env couldn't be found. Ignore if you are in a workflow`);
}

process.env.NODE_ENV = process.env.NODE_ENV || "development";

export default {
  env: process.env.NODE_ENV,
  client: process.env.CLIENT,
  app: {
    port: process.env.PORT,
  },
};
