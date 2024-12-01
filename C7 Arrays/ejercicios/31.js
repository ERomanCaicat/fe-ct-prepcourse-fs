function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
       
      /* var arreglo= texto.split("");
      var nuevo=[];
      arreglo.map(elemento=>{
          nuevo.unshift(elemento);
      })

      return  nuevo.join("") */

      return texto.split("").reverse().join("");
       
       
}

module.exports = invertirTexto;
