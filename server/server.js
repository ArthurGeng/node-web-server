const path = require('path');
const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
const express = require('express');

const app = express();
app.use(express.static(publicPath));
app.listen(port,()=>console.log(`Server is up on ${port}`));
