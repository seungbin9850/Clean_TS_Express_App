import { createConnection } from "typeorm";
import connectionOptions from "@/../ormconfig";

export default async () => {
  await createConnection(connectionOptions);
};
