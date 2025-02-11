import "dotenv/config";
import express from "express";
import cors from "cors";
import warehouseRoutes from "./routes/warehouseRoute.js";
import inventoryRoutes from "./routes/inventoryRoute.js";

const app = express();
const PORT = process.env.PORT || 5051;

app.use(cors()); // public API
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Welcome to Sara's API - Warehouse Management System");
});

app.use("/warehouses", warehouseRoutes);
app.use("/inventories", inventoryRoutes);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
