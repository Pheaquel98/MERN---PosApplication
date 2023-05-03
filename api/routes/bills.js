const Bills = require("../models/Bill.js")
const express = require("express")
const router = express.Router()

// Read

router.get("/get-all-bills", async (req, res) => {
  try {
    const bills = await Bills.find()
    res.status(200).json(bills)
  } catch (error) {
    res.status(500).json(error)
  }
})

// Create

router.post("/add-bills", async (req, res) => {
  try {
    const newBills = new Bills(req.body)
    await newBills.save()
    res.status(200).json("Item added successfully.")
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router
