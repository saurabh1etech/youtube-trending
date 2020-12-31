const axios = require("axios")
const ytModel = require("../models/ytModel")

const config = {
    headers: {
        'x-youtube-client-name': '1',
        'x-youtube-client-version': '2.20180222',
        'accept-language': 'en-US,en;q=0.5'
    }
}

exports.getVideos = async (req, res) => {

    let params = {
        part: 'snippet',
        chart: 'mostPopular',
        kind: 'youtube#videoListResponse',
        maxResults: process.env.VIDEOS_COUNT,
        regionCode: 'IN',
        key: process.env.API_KEY
    };

    let trending_page = `https://www.googleapis.com/youtube/v3/videos?part=${params.part}&chart=${params.chart}&maxResults=${params.maxResults}&regionCode=${params.regionCode}&key=${params.key}`;

    try {
        let yt = await axios.get(trending_page, config);
        //console.log(yt.data.items[1].snippet);
        ytModel.updateVideos(yt.data.items).then((response) => {
            return res.status(200).send({ "responseStatus": 1, "responseData": response });
        })
    } catch (error) {
        return res.status(204).send({ "responseStatus": 0, "responseData": error });
    }
}

exports.getVideosList = async (req, res) => {
    try {
        ytModel.getVideosList().then((response) => {
            return res.status(200).send({ "responseStatus": 1, "responseData": response });
        })
    } catch (error) {
        return res.status(204).send({ "responseStatus": 0, "responseData": error });
    }
}

exports.getVideo = async (req, res) => {
    try {
        ytModel.getVideo(req.params).then((response) => {
            return res.status(200).send({ "responseStatus": 1, "responseData": response });
        })
    } catch (error) {
        return res.status(204).send({ "responseStatus": 0, "responseData": error });
    }
}