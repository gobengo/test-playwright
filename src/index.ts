// ESM
import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

fastify.get("/", async (request, reply) => {
  await new Promise((resolve) => setTimeout(resolve, 6000));
  reply.type("text/html").send(`
        <!doctype html>
        <div class="foo">bar</div>
    `);
});

const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
