/** @format */

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import ticketRoutes from "./routes/ticketRoutes.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());
app.use("/api/tickets", ticketRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
