class GuessingGame {
    constructor() {}

    setRange(min, max) {
      this.min=min;
      this.max=max;
    }

    //returns solution candidate (you make an assumption based on range and previous assumptions)
    guess() {
    this.answear = Math.round(this.min+(this.max - this.min) / 2);
    return this.answear;
    }

    //is called if prev call of guess() returned number which is greater than answer
    lower() {
     this.max=this.answear;
    }

    //is called if prev call of guess() returned number which is lower than answer
    greater() {
        this.min=this.answear;
    }
}

module.exports = GuessingGame;
