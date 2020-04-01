
class Event {
  constructor (intervalFirst, intervalSecond) {
    this.intervalFirst = intervalFirst
    this.intervalSecond = intervalSecond
    this.timerFirstId = null
    this.timerSecondId = null
    this.timerThirdId = null
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

  clearHandlers () {
    clearInterval(this.timerFirstId)
    clearTimeout(this.timerSecondId)
    clearTimeout(this.timerThirdId)
  }

  launchHandlers () {
    const it = this
    this.timerFirstId = setInterval(this.first, this.intervalFirst)

    this.timerSecondId = setTimeout(function run () {
      it.second()
      setTimeout(run, it.intervalSecond)
    }, this.intervalSecond)

    this.timerThirdId = setTimeout(function () {
      it.third()
      setInterval(function () {
        it.third()
      }, 60000)
    }, 8000)
  }
}

const event = new Event(3000, 1000)
event.launchHandlers()
