class Handlers {
  constructor (intervalFirst, intervalSecond, wait) {
    this.intervalFirst = intervalFirst
    this.intervalSecond = intervalSecond
    this.wait = wait
    this.secondTimerId = null
    this.thirdTimerId = null
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
      clearTimeout(it.secondTimerId)
      it.secondHandler()
      it.secondTimerId = setTimeout(run, it.intervalSecond)
    }, this.intervalSecond)

    setTimeout(function () {
      clearTimeout(it.thirdTimerId)
      it.thirdHandler()
      it.thirdTimerId = setInterval(function () {
        it.thirdHandler()
      }, 60000)
    }, this.wait)
  }
}

module.exports = { Handlers }
