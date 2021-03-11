import "module-alias/register";
import "reflect-metadata";
import env from "./config/env";

async function startServer() {
  const app = (await import("./config/app")).default;
  app.listen(env.port, () => {
    console.log("server on!");
  });
}

startServer();
