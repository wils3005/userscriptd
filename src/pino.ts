import pino, { stdTimeFunctions } from "pino";

import { envSchema } from "./zod";

const { USERSCRIPTD_PINO_LEVEL } = envSchema.parse(process.env);

const loggerOptions = {
  level: USERSCRIPTD_PINO_LEVEL,
  redact: [],
  timestamp: stdTimeFunctions.isoTime,
};

export const logger = pino(loggerOptions);
