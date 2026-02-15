import http, { IncomingMessage, Server, ServerResponse } from "http";

// create server
const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log("Server is running...");

    if (req.url === "/" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });

      const responseData = {
        message: "Hello From Node.js with TypeScript",
        path: req.url,
      };

      res.end(JSON.stringify(responseData));
    }
  }
);

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
