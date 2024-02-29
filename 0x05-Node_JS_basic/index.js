const express = require("express")


const app = express()

app.route('/', (req, res) => {
  res.statusCode = 200
  console.log(req.url)
  res.end("ended here")
})
app.route("/", (request, response) => {
  console.log(req.url)
  response.statusCode = 200
  response.write("Hey there from express")
  response.end()
})

app.listen(1235, () => {
  console.log("server running on local host")
})


module.exports = app