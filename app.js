const express = require("express")
const ytdl = require("ytdl-core")

const app = express();

app.get("/", async (req, res) => {
    const { url } = req.query;

    if(!ytdl.validateURL(url)) {
        return res.send("Url invalida");
    }
    try {
        // const videoID = ytdl.getURLVideoID(url)
        // let info = await ytdl.getInfo(videoID);
        // let highQuality = ytdl.filterFormats(info.formats, 'highest');
        // console.log('Formats with high Quality: ' + highQuality.length);
        res.header("Content-Disposition", 'attachmentt; filename="video.mp4"');
        return ytdl(url).pipe(res);
    } catch (error) {
        console.log(error);
        res.send("Erro ao baixar video")
    } 
});


app.listen(3000);