function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
    
  /*var duplica= array.map(elemento=>{
     return elemento *2;
  })*/

     var duplica=[];

     for(let i=0; i< array.length;i++){
       duplica.push(array[i]*2)
     }

  return duplica;
}

module.exports = duplicarElementos;
