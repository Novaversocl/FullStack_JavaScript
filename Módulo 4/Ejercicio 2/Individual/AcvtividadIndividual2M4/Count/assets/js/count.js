export default class count {
    constructor() {
      this.valor = 0;
    }
  
    increment() {
      this.valor++;
      console.log(`Incrementaste el contador. Valor actual: ${this.valor}`);
    }
  
    decrement() {
      this.valor--;
      console.log(`Decrementaste el contador. Valor actual: ${this.valor}`);
    }
  }


