const { Handlers } = require('./handlers')

const data = new Date()
const curSec = data.getSeconds()

let wait = 0
const second = 8
if (curSec > second) {
  wait = 60 - curSec + second
} else { wait = second - curSec }

const handlers = new Handlers(3000, 2000, wait * 1000)
handlers.launchHandlers()
