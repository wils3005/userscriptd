import { join } from "path";

import fastify from "fastify";
import fastifyStatic, { FastifyStaticOptions } from "fastify-static";

import { logger } from "./pino";
import type { FastifyErrorHandler } from "./types";

const staticOptions: FastifyStaticOptions = {
  root: join(__dirname, "static"),
};

export const errorHandler: FastifyErrorHandler = async (error, _, reply) => {
  await reply.status(400).send(error);
};

export const fastifyInstance = fastify({ logger })
  .register(fastifyStatic, staticOptions)
  .setErrorHandler(errorHandler)
  .get("/", async (_, reply) => reply.send("¯\\_(ツ)_/¯"));
