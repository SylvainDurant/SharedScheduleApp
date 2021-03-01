const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3080;


app.use(bodyParser.json());
app.use(express.static(__dirname+"/my-app/dist/SharedScheduleApp/"));

app.get('/', (req,res) => {
  res.sendFile(__dirname+"/my-app/dist/SharedScheduleApp/index.html")
});

app.listen(port, () => {
    console.log(`Server listening on the port: ${port}`);
});