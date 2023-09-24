import TokensModel from "../models/TokensModel.mjs";
import UsersModel from "../models/UsersModel.mjs";

export default class UsersController {
    static async getUsers(req, res) {
        try {
            const data = await UsersModel.get()

            res.statusCode = 200
            res.setHeader('content-type', 'application-json')
            res.end(JSON.stringify(data))
        }
        catch (error) {
            res.statusCode = 404
            res.end('not found')
        }
    }

    static async regUser(req, res, body) {
        try {
            const data = await UsersModel.registration(body)
            console.log('regUser', data);
            const token = await TokensModel.createToken(data)


            res.statusCode = 200
            res.setHeader('content-type', 'application-json')
            res.end(JSON.stringify(token))
        }
        catch (error) {
            res.statusCode = 404
            res.end('not found')
        }
    }
}