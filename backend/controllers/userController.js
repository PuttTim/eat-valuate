'use strict'

const _usersDB = require('../models/usersDB')

const usersDB = new _usersDB()

function getUserById(request, respond) {
    let id = parseInt(request.params.id)
    console.log(id)
    usersDB.getUser(id, (error, results) => {
        if (error || results.length === 0) {
            respond.json(error)
        }
        respond.json(results)
    })
}

module.exports = { getUserById }
