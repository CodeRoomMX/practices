var calculadora = {
  num1: 0,
  num2: 0,
  inicializa: function(num1, num2){
    this.num1 = num1;
    this.num2 = num2;
  },
  suma: function(){
    return this.num1 + this.num2;
  },
  resta: function(){
    return this.num1 - this.num2;
  },
  multiplica: function(){
    return this.num1 * this.num2;
  },
  divide: function(){
    return this.num1 / this.num2;
  }
}

calculadora.inicializa(2,0);
console.log(calculadora.suma());
console.log(calculadora.resta());
console.log(calculadora.multiplica());
console.log(calculadora.divide());