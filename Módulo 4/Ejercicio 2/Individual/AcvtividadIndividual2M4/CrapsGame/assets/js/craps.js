export default class craps {
    constructor() {
      this.face = 6;
    }
  
    launch() {
      return Math.floor(Math.random() * this.face) + 1;
    }
  }