const express = require("express");

const router = express.Router();

/* router.get("/inventory", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM INVENTORY");
    if (result.rows.length > 0) {
      res.json(result.rows); // updating the tables
    } else {
      res.status(404).json({ message: "no inventory found" });
    }
  } catch (e) {
    console.log("error", e);
    res
      .status(500)
      .json({ message: "error occured in fetching inventory api" });
  }
}); */

// Hardcoded data for env testing
router.get("/inventory", async (req, res) => {
  try {
    const inventory = {
      inventory: [
        { name: "traditional broth", quantity: 20, unit: "ml" },
        { name: "chashu", quantity: 50, unit: "pieces" },
        { name: "molten egg", quantity: 100, unit: "pieces" },
      ],
    };
    res.send(inventory);
  } catch (e) {
    console.log("error", e);
  }
});
module.exports = router;
