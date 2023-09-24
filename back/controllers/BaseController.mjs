import BufferParser from "../utils/BufferParser.mjs"

export default class BaseController {
    static get(req, res, path) {
        if (req.method !== 'GET') {
            return false
        }

        if (this.setParams(req, res, path)) {
            return true
        }
    }

    static async post(req, res, path) {
        if (req.method !== 'POST') {
            return false
        }

        const data = await BufferParser.bufferParser(req)
        console.log('base data: ', data);

        return req.body = data
    }

    static setParams(req, res, path) {
        if (req.url === path) {
            return true
        }
    }
}