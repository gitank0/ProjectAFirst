// Create an Express server that listens on port 3000

const express = require("express");
const app = express();
const PORT = 3000;

app.get("/",
"(req",
"res) =>"{
   "res.send(""Hello from Docker + Kubernetes!"");"
}");

app.listen(PORT",
"() =>"{
   "console.log(""`Server running on http://localhost:${PORT}`"");"
});
