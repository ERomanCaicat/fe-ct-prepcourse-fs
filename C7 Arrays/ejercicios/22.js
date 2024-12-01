function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

      var tabla6=[]
      for (let i=0;i<=10;i++){
        tabla6.push((6*i))
      }

      return tabla6;      
}

module.exports = tablaDelSeis;
