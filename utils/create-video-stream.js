import { createReadStream } from "fs";
import { pipeline } from "stream";

export const createVideoStream = (params) => {
    const { res, fileSize, videoFilePath } = params;
    const readVideoStream = createReadStream(videoFilePath);

    res.writeHead(200, {
        "Content-Length": fileSize,
        "Content-Type": "video/mp4"
    });

    return pipeline(readVideoStream, res, (err) => console.log(err));
}
