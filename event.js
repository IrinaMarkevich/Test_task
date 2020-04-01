
class Event {
  constructor (intervalFirst, intervalSecond) {
    this.intervalFirst = intervalFirst
    this.intervalSecond = intervalSecond
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
    const it = this
    setInterval(this.first, this.intervalFirst)

    setTimeout(function run () {
      it.second()
      setTimeout(run, it.intervalSecond)
    }, this.intervalSecond)

    // setTimeout(this.third, 8000)
    setTimeout(function () {
      it.third()
      setInterval(function () {
        it.third()
      }, 60000)
    }, 8000)
  }
}

const event = new Event(3000, 1000)
event.launchHandlers()
