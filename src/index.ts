import "dotenv/config";
import express, { type Express, type Request, type Response } from "express";

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express - TypeScript Server");
});

function start(): void {
  if (port === undefined) {
    console.log("The server can't start without a port!");
    return;
  }

  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
}

start();
