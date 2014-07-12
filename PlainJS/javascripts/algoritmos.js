
var grupo = [
    { nombre: 'Ana', edad: 12 },
    { nombre: 'Juan', edad: 23},
    { nombre: 'Pepe', edad: 45 }
];

var mayor;

mayor = grupo[0];

for (var i = 1 ; i < grupo.length ; i++){

    if (mayor.edad < grupo[i].edad){
        mayor = grupo[i];
    }

}

console.log("El mayor es: " + mayor.nombre);

var nomBuscar = 'Juan';

var encontrado = false;

var i = 0;

//var noEncontrado = ! encontrado;

//var j = i * -1;

while(i < grupo.length && ! encontrado){

    if (grupo[i].nombre === nomBuscar){
        encontrado = true;
    }

    i++;
}

var res = " no se encuentra";

if (encontrado){
    res = " si se encuentra";
}

console.log("La persona de nombre " + nomBuscar + res)



// TODO: Contar los mayores de 15 años.
var cantidad;


console.log("Son " + cantidad + " los mayores de 15 años.")
