import http from 'http'
import BaseController from './controllers/BaseController.mjs'
import UsersController from './controllers/UsersController.mjs'

const server = http.createServer(async (req, res) => {

    res.setHeader('access-control-allow-origin', '*')
    res.setHeader('access-control-allow-headers', '*')
    res.setHeader('access-control-allow-methods', '*')
    res.setHeader('access-control-request-headers', '*')
    res.setHeader('access-control-request-method', '*')

    if (req.method === 'OPTIONS') {
        res.statusCode = 200
        res.end('')
    } else {
        try {
            if (await BaseController.post(req, res, '/users')) {
                console.log('req.body: ', req.body);
                await UsersController.getUsers(req, res, req.body)
            }
        }
        catch (error) {
            res.statusCode = 502
            res.end('Server error')
        }
    }
})

server.listen(8888)