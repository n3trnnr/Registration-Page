import fs from 'fs/promises'
import path from 'path';
import BufferParser from '../utils/BufferParser.mjs';

export default class TokensModel {
    static async createToken(login) {
        try {
            if (login) {
                const token = {
                    [login]: Date.now() + (30 * 24 * 60 * 60)
                }
                const filePath = path.resolve(BufferParser.ROOT_PATH, './data/tokens.json')
                const data = JSON.parse(await fs.readFile(filePath))
                data.push(token)
                fs.writeFile(filePath, JSON.stringify(data))
                return token
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}