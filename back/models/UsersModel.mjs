import fs from 'fs/promises'
import path from 'path'
import BufferParser from '../utils/BufferParser.mjs';

export default class UsersModel {
    static async add(data) {
        console.log('UsersModel: ', data);
    }

    static async registration(body) {
        console.log('UsersModel: ', body);
        try {
            const filePath = path.resolve(BufferParser.ROOT_PATH, './data/registration.json')
            const data = JSON.parse(await fs.readFile(filePath))
            // console.log('rawData', rawData);
            data.push(body)
            fs.writeFile(filePath, JSON.stringify(data))
            // console.log('regData', data);
            return body.login

        }
        catch (error) {
            console.log(error);
        }
    }
}