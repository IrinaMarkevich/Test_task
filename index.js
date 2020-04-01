const { Handlers } = require('./handlers')

const handlers = new Handlers(3000, 2000)
handlers.launchHandlers()
