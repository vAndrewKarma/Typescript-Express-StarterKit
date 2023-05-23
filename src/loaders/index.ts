import expressLoader from "./express";
import type { Express } from "express";
import { logger } from "../config/logger";
export default async function ({ app }: { app: Express }) {
  await expressLoader({ app }); // loading express mw, routes, handlers,etc
  logger.info("Express loaded");
}
