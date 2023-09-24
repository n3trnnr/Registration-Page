import fs from 'fs/promises'
import path from 'path'
import BufferParser from '../utils/BufferParser.mjs';

export default class UsersModel {
    static async get() {
        try {
            const filePath = path.resolve(BufferParser.ROOT_PATH, './data/usersList.json')
            const data = JSON.parse(await fs.readFile(filePath))
            return data
        }
        catch (error) {
            console.log(error);
        }
    }

    static async registration(body) {
        console.log('UsersModel: ', body);
        try {
            const filePath = path.resolve(BufferParser.ROOT_PATH, './data/registeredUser.json')
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