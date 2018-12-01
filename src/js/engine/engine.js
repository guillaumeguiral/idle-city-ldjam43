class Engine {
  constructor() {}

  loop() {
    console.log(Math.random())
  }

  start() {
    setInterval(this.loop, 1000)
  }
}

export default Engine;