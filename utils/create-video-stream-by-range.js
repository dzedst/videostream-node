import { createReadStream } from "fs";
import { pipeline } from "stream";
import { getChunkDetails } from "./get-chunk-details.js"

export const createVideoStreamByRange = (params) => {
    const { res, range, fileSize, videoFilePath } = params;
    const { start, end, chunkSize } = getChunkDetails(range, fileSize);
    const readVideoStream = createReadStream(videoFilePath);

    res.writeHead(206, {
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": chunkSize,
        "Content-Type": "video/mp4"
    });

    return pipeline(readVideoStream, res, (err) => console.log(err));
}
