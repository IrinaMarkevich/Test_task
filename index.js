const { Event } = require('./task')

const event = new Event(3000)
event.launchHandlers()
