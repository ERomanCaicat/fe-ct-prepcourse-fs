function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:


  var arreglo=[];
  for (let i=0;i<10;i++){
   num+=2;
   arreglo.push(num);
   if(i ==num) return "Se interrumpió la ejecución";     

  }
  return arreglo;

  
  /*var contador=0;  
   while(contador<10){
    num+=2
    if(num==contador)return "Se interrumpió la ejecución"
    arreglo.push(num);
    contador++ 
   }
    */
   /*  for(let i=0;i<10;i++){
       num+=2
       arreglo.push(num)
       if(num == i)return "Se interrumpió la ejecución"
       
    }

    

   return arreglo; */
}

module.exports = breakStatement;
