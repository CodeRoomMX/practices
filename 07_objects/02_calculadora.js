var calculadora = {
  suma: function(num1, num2){
    return num1 + num2;
  },
  resta: function(num1, num2){
    return num1 - num2;
  },
  multiplica: function(num1, num2){
    return num1 * num2;
  },
  divide: function(num1, num2){
    return num1 / num2;
  }
}

console.log(calculadora.suma(1,2));
console.log(calculadora.resta(1,2));
console.log(calculadora.multiplica(1,2));
console.log(calculadora.divide(1,2));