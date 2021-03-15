require('dotenv').config()
const cors = require('cors')
const express = require('express')
const helmet = require('helmet')
const server = express()
const port = process.env.PORT || 8000
server.use(express.json());
server.use(helmet())
server.use(cors())

const beingsRouter = require("./beings/beingsRouter.js")
const categoriesRouter = require("./categories/categoriesRouter.js")

server.use("/api/beings", beingsRouter)
server.use("/api/categories", categoriesRouter)

server.use("/", (req, res) => {
    res.status(200).json('10,000 Beings API')
})

server.listen(port, () => {
    console.log('Listening to 10,000 Beings')
})