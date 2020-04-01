class Handlers {
  constructor (intervalFirst, intervalSecond, wait) {
    this.intervalFirst = intervalFirst
    this.intervalSecond = intervalSecond
    this.wait = wait
    this.secondTimerId = null
    this.thirdTimerId = null
    this.timerIdSecondHandler = null
    this.timerIdThirdHandler = null
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

    this.timerIdSecondHandler = setTimeout(function run () {
      clearTimeout(this.timerIdSecondHandler)
      clearTimeout(this.secondTimerId)
      it.secondHandler()
      it.secondTimerId = setTimeout(run, it.intervalSecond)
    }, this.intervalSecond)

    this.timerIdThirdHandler = setTimeout(function () {
      clearTimeout(this.timerIdThirdHandler)
      clearTimeout(this.thirdTimerId)
      it.thirdHandler()
      it.thirdTimerId = setInterval(function () {
        it.thirdHandler()
      }, 60000)
    }, this.wait)
  }
}

module.exports = { Handlers }
