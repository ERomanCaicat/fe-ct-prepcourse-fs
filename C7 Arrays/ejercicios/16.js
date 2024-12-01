function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

      /*for(let i=0;i<array.length;i++){
          array[i]=array[i]*i;
      }

      return array;*/

      var multi= array.map((elemento,indice)=> elemento*indice)
      

      return multi;
}

module.exports = multiplicarElementosPorIndice;
