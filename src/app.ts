import express from "express";
import config from "./config";
import { logger } from "./config/logger";
async function init() {
  const app = express();
  // REMINDER: add production and dev env for startup
  (await import("./loaders")).default({ app }); // loading necessary "components"
  if (require.main === module) {
    // check if the current module is the main module being run directly
    app
      .listen(config.app.port, () => {
        logger.info(
          `Server running on port ${config.app.port}  -  ENV: ${config.env}`
        );
        logger.info(`Allowed Client: ${config.client}`);
      })
      .on("error", (error) => {
        logger.error(error.message);
        process.exit(1);
      });
  }
  return app;
}
export const app = init();
