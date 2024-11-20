function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
      var numero= String(num);
      if(numero.length == 3) return true
      return false;
}

module.exports = tieneTresDigitos;
