#!/usr/bin/env node

import { fastifyInstance } from "./fastify";
import { envSchema } from "./zod";

const { USERSCRIPTD_FASTIFY_HOST, USERSCRIPTD_FASTIFY_PORT } = envSchema.parse(
  process.env
);

void fastifyInstance.listen({
  host: USERSCRIPTD_FASTIFY_HOST,
  port: USERSCRIPTD_FASTIFY_PORT,
});
