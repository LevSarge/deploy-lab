const express = require("express");
const path = require("path")
const app = express();
var Rollbar = require('rollbar')
const PORT = process.env.PORT || 5000

const cors = require("cors");


var rollbar = new Rollbar({
  accessToken: '50c7a148ac2142ea96bb4e85927e30ce',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

app.use(cors());
app.use(express.json());


app.use('/', express.static(path.join(__dirname, 'public')))
app.get('/error', () => {
  nonExistentFunction();
})

app.use(rollbar.errorHandler());
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
