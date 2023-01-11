const express = require('express');
const app = express();

const path = require('path');
const router = express.Router();

//environment variables
require('dotenv').config();

const owpKey = process.env.owpKey;
const hereKey = process.env.hereKey;
const port = process.env.PORT;

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

//add the router
app.use(express.static('./'))
app.listen(process.env.PORT || 5000);