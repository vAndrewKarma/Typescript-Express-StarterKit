import express from "express";
import config from "./config";
import { logger } from "./config/logger";
async function init() {
  const app = express();
  if (config.env === "development") {
    if (require.main === module) {
      app
        .listen(config.app.port, () => {
          logger.info(
            `Server running on port ${config.app.port}  -  ENV: ${config.env}`
          );
        })
        .on("error", (error) => {
          logger.error(error.message);
        });
    }
  }
}
init();
