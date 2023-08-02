const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const PORT = 4000;

app.use(express.json());

app.listen(PORT, function() {
    console.log(" ٩(˘◡˘)۶ Server is running on Port: " + PORT);
})