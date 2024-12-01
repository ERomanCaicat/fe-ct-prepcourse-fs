function ordenarArray(array) {
  // Ordena los elementos del arreglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:

        //var menorMayor= array.sort();
        //return menorMayor;

         var aux;

        for(let i=0;i<array.length;i++){
          for(let j=0;j<array.length-1;j++){
            if(array[j]>array[j+1]){
              aux=array[j]
              array[j]=array[j+1]
              array[j+1]=aux
            }
          }          
        }
        return array;                 
}

module.exports = ordenarArray;
