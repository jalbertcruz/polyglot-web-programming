
function porCada(valores, func) {
    for (var i = 0; i < valores.length; i++) {
        func(i, valores[i])
    }
}

var nombres = ["Andres", "Pepe", "Ana"]

porCada(nombres, function (index, nom) {
    console.log('"' + nom + '"' + " esta en la posicion: " + index)
})