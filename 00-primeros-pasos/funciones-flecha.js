let suma = ( x, y ) => x + y;

let resta = ( x, y ) => x - y;

let multiplicacion = ( x, y ) => x * y;

let division = ( x, y ) => {
    if(y === 0) {
        throw new Error('No se puede dividir por 0');
    } 
    return x / y;
}