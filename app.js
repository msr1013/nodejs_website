const express = require('express');
const path = require('path');
const app = express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

const homeRoutes = require('./routes/homeRoutes')

app.use('/',homeRoutes);

const port = 4000;
app.listen(port,() => {
  console.log('server is running on port ${port}');
})
