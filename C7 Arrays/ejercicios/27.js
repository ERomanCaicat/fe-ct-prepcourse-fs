function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
       var unido="";
       for (let i=0;i<palabras.length;i++){
        unido+=palabras[i];
        if(i<palabras.length-1)unido+=" "
       }
       return unido;



      /* contador=0;
       palabras.forEach(elemento =>{
            unido+=elemento;            
            if(contador<palabras.length-1)unido+=" "
            contador++
       })   */   
      
       /*  for(let i=0;i<palabras.length;i++){
          unido+=palabras[i];
          if(i<palabras.length-1)unido+=" "
        }    
                   
      return unido; */
}

module.exports = dePalabrasAFrase;
