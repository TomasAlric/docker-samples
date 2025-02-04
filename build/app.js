const http = require("http");

const hostname = "0.0.0.0";
const port = process.env.PORT;
const version = process.env.VERSION;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

server.listen(port, hostname, () => {
  console.log(
    `Server running at http://${hostname}:${port}/ and version ${version}`
  );
});

process.on("SIGINT", () => {
  console.log("Server shutting down");
  server.close(() => {
    process.exit(0);
  });
});
