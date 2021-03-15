import "module-alias/register";
import "reflect-metadata";
import env from "./config/env";
import app from "./config/app";
import { connection } from "@/infra/db";

const PORT: number = env.port;

connection()
  .then(async () => {
    app.listen(PORT, () => {
      console.log(`server on port ${PORT}`);
    });
  })
  .catch(console.error);
