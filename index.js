import http from "http";

const PORT = 8000;
const server = http.createServer((req, res) => {
    res.end("Server response")
});

server.listen(PORT, () => console.log(`Server succesfully started at http://localhost:${PORT}`));