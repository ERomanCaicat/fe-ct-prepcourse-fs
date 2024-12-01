function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
   
  /*var May=[];    
  for (let i=0;i<array.length;i++){
     May.push(array[i].toUpperCase());  }
  return May;*/

   var Mayus = array.map(elemento=>{
      return elemento.toUpperCase();
   })

   return Mayus;

 
}

module.exports = convertirStringAMayusculas;
