// No cambies los nombres de las funciones.
// [45, 67, 100, 98, 78] = 5
//   0   1   2    3   4

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
   return array[0];
}
//console.log(devolverPrimerElemento([45, 67, 100, 98, 78]));

// [45, 67, 100, 98, 78] = 5
//   0   1   2    3   4
function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}
//console.log(devolverUltimoElemento ([45, 67, 100, 98, 78])); 45

// [45, 67, 100, 98, 78] = 5
//   0   1   2    3   4
function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}
//console.log(obtenerLargoDelArray([45, 67, 100, 98, 78])); 5

// [45, 67, 100, 98, 78] = 5
//   0   1   2    3   4
function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
 var array1=[]
     for(var i=0;i<array.length;i++){
      let suma=array[i]+1;
      array1.push(suma);
      }
 return array1
}
//console.log(incrementarPorUno([45, 67, 100, 98, 78])); 46, 68, 101,99, 79

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array
}
//console.log(agregarItemAlFinalDelArray([45, 67, 100, 98, 78],200)); 45, 67, 100, 98, 78, 200 

// [45, 67, 100, 98, 78,200] = 6
//   0   1   2    3   4  5
function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}
//console.log(agregarItemAlComienzoDelArray([45, 67, 100, 98, 78, 200],098)); 98, 45, 67, 100, 98, 78, 200


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' ');
}
//console.log(dePalabrasAFrase(['Hello', 'world!'])); Hello word!

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(var i=0; i<array.length;i++){
    if (elemento===array[i]){
      return true;
    }
  }
  return false;
}
//console.log(arrayContiene(['facundo','Manuel'],'Manuel')); true 


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let suma=0;
  for(let i=0; i<numeros.length; i++){
    suma=suma+ numeros[i];
  }
  return suma;
}
//console.log(agregarNumeros([10,10,10,1])); 31

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let suma =0;
         for(var i=0; i<resultadosTest.length;i++){
          suma=suma+resultadosTest[i];
         }
  return suma/resultadosTest.length;
}
//console.log(promedioResultadosTest([20/3])); 6.6666666666666667

//[3444,9,23,7879] = 4
//   0  1  2   3
function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let max= numeros[0];
  for(var i=0; i<numeros.length;i++){
    if(numeros[i]>max){
      max=numeros[i];
    }
  }
  return max;
}
//console.log(numeroMasGrande([3444,9,23,7879])); 7879


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length< 1){
    return 0;
  }
  let producto=1
  for(let i=0;i<arguments.length;i++){
     producto = producto * arguments[i];
  }
  return producto;
}
//console.log(multiplicarArgumentos([])); 0


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  suma=0;
  for(let i=0;i<arreglo.length;i++){
   if(arreglo[i]>18){
    suma = suma + 1
   }
  }
return suma;
}
//console.log(cuentoElementos([20,98,88,12])); 3


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
