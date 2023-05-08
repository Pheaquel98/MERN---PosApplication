const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const logger = require("morgan")
const app = express()
const cors = require("cors")
const port = 5000

// Routes

const categoryRoute = require("./routes/categories.js")
const productRoute = require("./routes/products.js")
const billsRoute = require("./routes/bills.js")
const authRoute = require("./routes/auth.js")
const usersRoute = require("./routes/users.js")

dotenv.config()

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected to MongoDB")
  } catch (error) {
    throw error
  }
}

// Middlewares
app.use(express.json())
app.use(cors())
app.use(logger("dev"))

app.use("/api/categories", categoryRoute)
app.use("/api/products", productRoute)
app.use("/api/bills", billsRoute)
app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)

app.listen(port, () => {
  connect()
  console.log(`Example app listening on port ${port}`)
})
