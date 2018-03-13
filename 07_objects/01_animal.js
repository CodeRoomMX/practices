var animal = {
  nombre: "Tigrito",
  raza: "panthera tigris",
  tamanio: "grande",
  color: "atigrado",
  comer: function(){
    return 'Estoy comiendo, no molestar';
  },
  dormir: function(){
    return 'Estoy durmiendo, no molestar';
  },
  presentarme: function(saludo){
    return `${saludo}, mi nombre es ${this.nombre} y soy de la raza ${this.raza}`;
  }
}
​
console.log(animal.nombre);
console.log(animal.raza);
console.log(animal.comer());
console.log(animal.dormir());
console.log(animal.presentarme('Hola'));