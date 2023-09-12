export default class BufferParser {
    static bufferParser(req) {
        return new Promise((resolve, reject) => {
            const buffer = []
            req.on('data', (chunk) => {
                buffer.push(chunk)
            }).on('end', () => {
                const rawData = Buffer.concat(buffer).toString()
                const data = JSON.parse(rawData)
                resolve(data)
            }).on('error', (error) => {
                reject(error)
            })
        })
    }
}