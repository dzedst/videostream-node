import { fileURLToPath } from "url"
import { join } from "path"
import { createReadStream } from "fs";
import { pipeline } from "stream";

export const sendHomePage = (req, res) => {
    const __dirname = fileURLToPath(new URL(".", import.meta.url));
    const readStream = createReadStream(join(__dirname, "../public/views/index.html"));
    
    res.setHeader("Content-Type", "text/html");
    
    pipeline(readStream, res, (err) => console.log(err));
};
