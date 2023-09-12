import UsersModel from "../models/UsersModel.mjs";

export default class UsersController {
    static async getUsers(req, res, body) {
        try {
            console.log('controller: ', body);
            const data = await UsersModel.add(body)

            res.statusCode = 200
            res.setHeader('content-type', 'application-json')
            res.end(JSON.stringify(data))
        }
        catch (error) {
            res.statusCode = 404
            res.end('not found')
        }
    }
}