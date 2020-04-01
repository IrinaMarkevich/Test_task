
class Event {
  constructor (interval) {
    this.interval = interval
  }

  first () {
    console.log('1: "Lorem ipsum...')
  }

  second () {
    console.log('2: "Lorem ipsum...')
  }

  third () {
    console.log('3: "Lorem ipsum...')
  }

  launchHandlers () {
    this.idInterval = setInterval(async () => {
      this.first()
      const promise = new Promise(() => {
        setTimeout(this.second, 0)
      })
      await promise
    }, this.interval)
    setTimeout(this.third, 8000)
    this.idThirdInterval = setInterval(async () => {
      const promise = new Promise(() => {
        setTimeout(this.third, 8000)
      })
      await promise
    }, 60000)
  }
}

module.exports = { Event }
