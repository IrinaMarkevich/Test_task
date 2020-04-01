class Handlers {
  constructor (intervalFirst, intervalSecond, wait) {
    this.intervalFirst = intervalFirst
    this.intervalSecond = intervalSecond
    this.wait = wait
  }

  firstHandler () {
    console.log('1: "Lorem ipsum...')
  }

  secondHandler () {
    console.log('2: "Lorem ipsum...')
  }

  thirdHandler () {
    console.log('3: "Lorem ipsum...')
  }

  launchHandlers () {
    const it = this
    setInterval(this.firstHandler, this.intervalFirst)

    setTimeout(function run () {
      let timerId = null
      clearTimeout(timerId)
      it.secondHandler()
      timerId = setTimeout(run, it.intervalSecond)
    }, this.intervalSecond)

    setTimeout(function () {
      let timerId = null
      clearTimeout(timerId)
      it.thirdHandler()
      timerId = setInterval(function () {
        it.thirdHandler()
      }, 60000)
    }, this.wait)
  }
}

module.exports = { Handlers }
