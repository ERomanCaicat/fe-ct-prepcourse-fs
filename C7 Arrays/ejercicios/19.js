function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código: 
                    /* var multi=1;
                    if(arguments.length==0) multi=0;                    
                    for(let i=0;i<arguments.length;i++){
                        multi=multi*arguments[i];
                    }

                    return multi; */
                    var multi=1;
                    if(arguments.length==0)return 0;
                    Array.from(arguments).forEach(elemento=>{
                      multi= elemento * multi;
                    })

                    

                    return multi;

}

module.exports = multiplicarArgumentos;
