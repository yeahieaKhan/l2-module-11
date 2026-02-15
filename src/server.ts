import http, { IncomingMessage, Server, ServerResponse } from "http";
import config from "./config";
import path from "path";

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


    if (req.url == "/api" && req.method == "GET") {
      res.writeHead(200, { "Context-type": "application/json" });

      const resData = {
        message: "Health api",
        path:req.url
      }
      res.end(JSON.stringify(resData))
    }
  }
);

server.listen(config.port, () => {
  console.log(`Server running on port :  ${config.port}`);
});
