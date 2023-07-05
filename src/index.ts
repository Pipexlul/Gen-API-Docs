import server from "./server";

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Docs running on: http:\/\/localhost:${PORT}/api-docs/`);
});
