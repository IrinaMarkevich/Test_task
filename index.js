const { Handlers } = require('./handlers')

const data = new Date()
const curSec = data.getSeconds()

let wait = 0
const second = 8
if (curSec > second) {
  wait = 60 - curSec + second
} else { wait = second - curSec }

const firstInterval = 3000
const secondInterval = 2000

const handlers = new Handlers(firstInterval, secondInterval, wait * 1000)
handlers.launchHandlers()
