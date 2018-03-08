/* 1. Hacer un for loop que cuente de 1 a 15. 
 * Si el número es divisible entre 3 deben mostrar en consola 'tin'
 * Si el número es divisible entre 5 deben mostrar en consola 'marin'
 * Si es divisible entre 3 y 5 deben mostrar en consola 'tin marin'
 * Si no es divisible entre 3 ni entre 5, mostrar sólo el número
 */
for(var i = 1; i <= 15; i++){
  if(i%3 === 0 && i%5 === 0){
    console.log('tin marin');
  } else if(i%3 === 0){
    console.log('tin');
  }else if(i%5 === 0){
    console.log('marin');
  }else{
    console.log(i);
  }
}

/* 2. Transformar el for loop de arriba en una función llamada "tinmarin" que: 
 * Permita tener un número máximo variable
 * Permita tener números divisores variables
 * Permita tener palabras de respuesta variables
 */
function tinmarin(numeroMaximo, primerDivisor, segundoDivisor, primerPalabra, segundaPalabra){
  for(var i = 1; i <= numeroMaximo; i++){
    if(i%primerDivisor === 0 && i%segundoDivisor === 0){
      console.log(primerPalabra + " " + segundaPalabra);
    } else if(i%primerDivisor === 0){
      console.log(primerPalabra);
    }else if(i%segundoDivisor === 0){
      console.log(segundaPalabra);
    }else{
      console.log(i);
    }
  }
}

tinmarin(21, 7, 3, 'tortugas', 'ninja');

/* 3. Transformar la función anterior en una función llamada "tinmarin2" que: 
 * Permita recibir una lista(array) en lugar de un número máximo variable
 * Haga la evaluación sobre cada uno de los items de la lista
 */
function tinmarin2(lista, primerDivisor, segundoDivisor, primerPalabra, segundaPalabra){
  for(var i = 0; i < lista.length; i++){
    var numero = lista[i];
    if(numero%primerDivisor === 0 && numero%segundoDivisor === 0){
      console.log(primerPalabra + " " + segundaPalabra);
    } else if(numero%primerDivisor === 0){
      console.log(primerPalabra);
    }else if(numero%segundoDivisor === 0){
      console.log(segundaPalabra);
    }else{
      console.log(numero);
    }
  }
}

tinmarin2([7,12,3,100,34,42,21], 7, 3, 'tortugas', 'ninja');

/* 4. Crear una función llamada "maxmin" que: 
 * Permita recibir una lista(array)
 * Evalue cada uno de los items en la lista y muestre los items máximo y mínimo de la lista
 */
function maxmin(lista){
  var max = lista[0];
  var min = lista[0];
  for(var i = 0; i < lista.length; i++){
    var numero = lista[i];
    if(numero > max){
      max = numero;
    }
    if(numero < min){
      min = numero;
    }
  }
  console.log("Máximo: " + max);
  console.log("Mínimo: " + min);
}

maxmin([7,12,3,100,34,42,21]);