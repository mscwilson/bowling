class Game {

  constructor() {
    this.frames = []
    this.scores = {}
    this.owedRolls = {}
  }

  inputRoll(pins) {
    this.frameCheck()

    this.frames[this.frames.length - 1].addRoll(pins)
    this.scores[`frame_${this.frames.length}`] += pins

    owedRolls.forEach

  }

  createFrame() {
    this.frames.push(new Frame(this.frames.length + 1))
    this.scores[`frame_${this.frames.length}`] = 0
  }

  frameCheck() {
    if (this.frames.length === 0) {
      this.createFrame()
    } else if ( this.frames[this.frames.length - 1].isCompleted() ) {
      let owed = this.frames[this.frames.length - 1].owedRolls()
      this.owedRolls[`frame_${this.frames.length}`] = owed
      this.createFrame()
    }
  }

}