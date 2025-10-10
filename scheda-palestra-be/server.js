import express from "express"
import cors from "cors"

const server = express()
const PORT = process.env.PORT || 3000;

server.use(express.static("public"))
server.use(cors())
server.use(express.json())
server.get("/", (req, res) => { res.send("Home Page"); });
server.get("/home", (req, res) => { res.send("Home Page"); });
server.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT})}`); });