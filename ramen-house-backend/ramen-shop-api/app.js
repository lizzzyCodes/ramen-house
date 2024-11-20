const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

const inventoryRoutes = require("../ramen-shop-api/routes/inventory");
const salesRoutes = require("../ramen-shop-api/routes/sales");
app.use("/api", inventoryRoutes);
app.use("/api", salesRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
