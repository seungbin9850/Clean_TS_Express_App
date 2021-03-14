import "module-alias/register";
import "reflect-metadata";
import env from "./config/env";
import app from "./config/app";
import Connection from "@/infra/db/connection";

const PORT: number = env.port;

Connection()
  .then(async () => {
    app.listen(PORT, () => {
      console.log(`server on port ${PORT}`);
    });
  })
  .catch(console.error);
