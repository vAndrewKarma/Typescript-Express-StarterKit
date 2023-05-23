import express from "express";
import config from "./config";
import { logger } from "./config/logger";
async function init() {
  const app = express();
  // REMINDER: add production and dev env for startup
  if (require.main === module) {
    // check if the current module is the main module being run directly
    app
      .listen(config.app.port, () => {
        logger.info(
          `Server running on port ${config.app.port}  -  ENV: ${config.env}`
        );
      })
      .on("error", (error) => {
        logger.error(error.message);
        process.exit(1);
      });
  }
}
init();
