import { z } from "zod";

export const envSchema = z.object({
  USERSCRIPTD_FASTIFY_HOST: z.string().nonempty(),
  USERSCRIPTD_FASTIFY_PORT: z.string().nonempty().transform(Number),
  USERSCRIPTD_PINO_LEVEL: z.string().nonempty(),
});
