import { statSync } from "fs";
import { resolve } from "path";
import { createVideoStream } from "../utils/create-video-stream.js"
import { createVideoStreamByRange } from "../utils/create-video-stream-by-range.js";

export const sendVideo = (req, res) => {
    const videoFilePath = resolve('./public/videos/everything.mp4')
    const fileSize = statSync(videoFilePath).size;
    const range = req.headers.range;
    console.log(range);

    return !range ? 
        createVideoStream({
            res,
            fileSize,
            videoFilePath
        }) :
        createVideoStreamByRange({
            res,
            range,
            fileSize,
            videoFilePath
        })
}