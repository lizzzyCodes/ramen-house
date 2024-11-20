const express = require("express");

const router = express.Router();

router.get("/sales", async (req, res) => {
  try {
    // EXAMPLE
    // http://localhost:8000/api/sales?startDate=2024-01-01
    const { startDate } = req.query; // not sure if i would need to parse this
    let query = "SELECT * FROM SALES";
    let queryParams = [];
    // if user wants to filter by startDate
    if (startDate) {
      // $1 is a placeholder for a parameter passed
      query = "SELECT * FROM SALES WHERE saleDate = $1";
      queryParams = [startDate];
    }
    const result = await pool.query(query, queryParams); // appending queryParams if it exists

    if (result.rows.length > 0) {
      // if there is data in the rows
      res.json(result.rows);
    } else {
      res.status(404).json({ message: "no sales data found" });
    }
  } catch (e) {
    console.log("error", e);
    res.status(500).json({ message: "error occured in fetching sales api" });
  }
});

module.exports = router;
