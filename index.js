import http from "http";
import { sendHomePage } from "./senders/send-home-page.js";


const getExecuterByUrl = {
    "/": sendHomePage
}

const router = (req, res) => {
    try {
        const url = req.url;
        const executer = getExecuterByUrl[url];

        if (!executer) {
            res.statusCode = 400;
            return res.end();
        }

        return executer(req, res);
    } catch (err) {
        console.error(err);
        res.statusCode = 500;
        res.statusMessage = "Internal server error occured";
        res.end();
    }
}

const PORT = 8000;
const server = http.createServer(router);

server.listen(PORT, () => console.log(`Server succesfully started at http://localhost:${PORT}`));