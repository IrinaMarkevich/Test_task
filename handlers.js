
class Handlers {
  constructor (intervalFirst, intervalSecond, wait) {
    this.intervalFirst = intervalFirst
    this.intervalSecond = intervalSecond
    this.wait = wait
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
      let timerId = null
      clearTimeout(timerId)
      it.second()
      timerId = setTimeout(run, it.intervalSecond)
    }, this.intervalSecond)

    this.timerThirdId = setTimeout(function () {
      let timerId = null
      clearTimeout(timerId)
      it.third()
      timerId = setInterval(function () {
        it.third()
      }, 60000)
    }, this.wait)
  }
}

module.exports = { Handlers }
