import fs from 'fs/promises'
import path from 'path'

export default class UsersModel {
    static async add(data) {
        console.log('UsersModel: ', data);
    }
}