function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
   var contador=0;
    /*for(let i=0;i<array.length;i++){
      if(array[0]!=array[i])
        contador++
    }*/

      array.forEach(elemento=>{
        if(elemento!=array[0])
          contador++
      })

    if(contador == 0)return true
    return false;
}

module.exports = todosIguales;
