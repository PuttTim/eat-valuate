'use strict'

const _usersDB = require('../models/usersDB')

const usersDB = new _usersDB()

function getUser() {
    console.log(usersDB.getUser(1))
}

getUser()
