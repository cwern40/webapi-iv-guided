require('dotenv').config();

const server = require('./api/server.js');

//setting the port to the variable that Heroku assigns or the default of 4000
const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`\n*** Server Running on ${port} ***\n`);
});
