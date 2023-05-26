import winston from "winston";
import config from "./index";
import path from "path";

// configure format
const enumError = winston.format((info) => {
  // a simple function  which returns the stack trace also when logger.error is fired
  if (info instanceof Error && config.env === "development") {
    // i think it is better to log  traced errors only if we using development
    Object.assign(info, { message: info.stack });
  }
  return info;
});

const errorTransport = new winston.transports.File({
  filename: path.join("logs", "error.logs"),
  level: "error",
});
const normalTransport = new winston.transports.File({
  filename: path.join("logs", "log.logs"),
  level: "info",
});

const transports = [
  new winston.transports.Console({
    stderrLevels: ["error"],
  }),
  errorTransport,
  normalTransport,
];

const time = new Date().toTimeString().slice(0, 9);
const date = new Date().toISOString().slice(0, 10);

export const logger = winston.createLogger({
  level: config.env === "development" ? "debug" : "info",
  format: winston.format.combine(
    enumError(),
    config.env === "development"
      ? winston.format.colorize()
      : winston.format.uncolorize(),
    winston.format.splat(), // log mesages with placeholders
    winston.format.printf(
      ({ level, message }) => `[ ${date} - ${time}] --- ${level}: ${message}`
    )
  ),
  transports: transports,
});
