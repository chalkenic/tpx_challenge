const server = require("./app.js");
const port = 3001;
const hostname = "localhost";

server.listen(port, hostname, () => {
  console.log(`Server currently running at ${hostname}:${port}/`);
});
