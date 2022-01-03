const express = require("express");
const path = require("path")
const app = express();
const PORT = 4000;

const cors = require("cors");

app.use(cors());
app.use(express.json());


app.use('/', express.static(path.join(__dirname, 'public')))



app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
