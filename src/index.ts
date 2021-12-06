import { join } from "path";

import fastify, {
  FastifyError,
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import fastifyStatic from "fastify-static";
import pino from "pino";
import pinoPretty from "pino-pretty";
import { z } from "zod";

import "./plugins";

const { FASTIFY_HOST, FASTIFY_PORT, PINO_LEVEL } = z
  .object({
    FASTIFY_HOST: z.string().nonempty(),
    FASTIFY_PORT: z.string().nonempty().transform(Number),
    PINO_LEVEL: z.string().nonempty(),
  })
  .parse(process.env);

const logger = pino(
  {
    level: PINO_LEVEL,
    redact: [],
    timestamp: pino.stdTimeFunctions.isoTime,
  },
  pinoPretty({}) as unknown as pino.DestinationStream
);

const errorHandler = async function (
  this: FastifyInstance,
  error: FastifyError,
  _: FastifyRequest,
  reply: FastifyReply
): Promise<void> {
  await reply.status(400).send(error);
};

void fastify({ logger })
  .register(fastifyStatic, { root: join(process.cwd(), "build", "static") })
  .setErrorHandler(errorHandler)
  .get("/", async (_, reply) => reply.send("¯\\_(ツ)_/¯"))
  .listen({ host: FASTIFY_HOST, port: FASTIFY_PORT });
