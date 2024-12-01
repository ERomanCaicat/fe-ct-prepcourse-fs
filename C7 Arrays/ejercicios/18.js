function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
            var contador=0;
            var suma=0
       /* for(let i=0;i<resultadosTest.length;i++){
                suma=resultadosTest[i]+suma;
                contador++
        }*/

           resultadosTest.forEach(elemento=>{
            suma=elemento+suma;
            contador++
           })     

        return suma/contador;

}

module.exports = promedioResultadosTest;
