const express = require("express");
const router = express.Router();
const pool = require("../db");

router.post("/order", (req, res) => {
  const { customerId, items } = req.body;
  /**
   *     id SERIAL PRIMARY KEY,
    customerId INT NOT NULL,
    orderDate DATE NOT NULL,
    totalAmount DECIMAL(10, 2) NOT NULL
  )
   */
    const orderDate = new Date().toISOString().split('T')[0]; // getting the date and formatting


  try {
  } catch (e) {}
  res.json();
});

module.exports = router;
