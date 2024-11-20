function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
        var potencia=0;
        var num;
        var total;
       while(potencia<numero){
            num= Math.pow(2,potencia)
            if(num===numero) total=numero
            potencia++
                       
                    
       }
        
       if(total)return true
        return false

       
       
       
        
            
}



module.exports = esPotenciaDeDos;
