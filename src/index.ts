import "dotenv/config";
import express, { type Express, type Request, type Response } from "express";
import cors from "cors";
import helmet from "helmet";

import validateEnv from "@/utils/validateEnv.js";
import { logger, morganMiddleware } from "@/utils/logger.js";

validateEnv();

// App Variables
const app: Express = express();
const port = process.env.PORT;

// App Configuration
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morganMiddleware);

app.get("/", (req: Request, res: Response) => {
  res.send("Express - TypeScript Servers");
});

app.listen(port, () => {
  logger.debug(`⚡️[server]: Server is running at http://localhost:${port ?? ""}`);
});
