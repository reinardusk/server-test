if (process.env.NODE_ENV !== "production") {
  require(`dotenv`).config();
}

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

const express = require('express')
const router = require('./routers/index.js')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use("/api", router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
