import express from "express";

import { apiDocs } from "./routes";

const app = express();

app.use("/api-docs", apiDocs);

export default app;
