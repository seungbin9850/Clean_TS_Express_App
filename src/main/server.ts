import "module-alias/register";
import "reflect-metadata";
import env from "./config/env";
import app from "./config/app";

async function startServer() {
  app.listen(env.port, () => {
    console.log("server on!");
  });
}

startServer();
