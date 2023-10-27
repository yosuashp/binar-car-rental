const http = require("http");
const port = 3000;
const fs = require("fs");

http.createServer((req, res) => {
  let filePath = "public" + req.url;

  if (filePath === "public/") {
    filePath = "public/index.html";
  } else if (filePath === "public/cars" || filePath === "public/cars/") {
    filePath = "public/carimobil.html";
  }

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      filePath = "public/404.html";
    }

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<h1>500 Internal Server Error</h1>");
      } else {
        res.writeHead(200);
        res.end(data);
      }
    });
  });
}).listen(port, "localhost", () => {
  console.log("Server running, open in http://localhost:%d", port);
});
