import expressLoader from "./express";
import type { Express } from "express";
import { logger } from "../config/logger";
export default async function ({ app }: { app: Express }) {
  await expressLoader({ app }); // loading express things
  logger.info("Express loaded");
}
