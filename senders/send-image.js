import { createReadStream } from "fs";
import { join } from "path";
import { pipeline } from "stream";
import { fileURLToPath } from "url";

export const sendImage = (req, res) => {
    const imageUrl = req.url;
    const __dirname = fileURLToPath(new URL(".", import.meta.url));
    const readImageStream = createReadStream(join(__dirname, `../public/images/${imageUrl}`))
    
    res.setHeader("Content-Type", "image/png");
    
    pipeline(readImageStream, res, (err) => console.log(err));
}
