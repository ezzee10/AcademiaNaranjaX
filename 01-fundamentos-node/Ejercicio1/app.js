/*Función que imprime la tabla del 5 concatenando string hasta el 10*/
const tabla_del_5 = () => {

    let resultado = '';

    for (let i = 1; i <= 10; i++) {
        resultado += `5 * ${i} = ${5 * i} \n`
    }
    
    console.log(resultado);
}

// tabla_del_5(5);

/*Función que imprime la tabla de cualquier entero positivo hasta el 10*/
/*Número: cualquier número entero positivo mayor o igual que 0 */
const calcular_tabla_numerica = ( numero ) => {
    
    if (numero < 0 || !Number.isInteger(numero) || isNaN(numero)) {
        console.log('El número ingresado debe ser de tipo numérico y entero positivo mayor o igual que 0');
        return;
    }
    
    let resultado = '';

    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} * ${i} = ${numero * i} \n`
    }

    console.log(resultado);
}

// calcular_tabla_numerica(5);

/*Función que imprime únicamente la tabla del 5 hasta el 10*/
/*Número: solo admite el número 5*/

const tabla_del_5_ = ( numero ) => {

    if (numero !== 5 || isNaN(numero)) {
        console.log('El número ingresado solo puede ser 5 de tipo numérico');
        return;
    }
    
    for (let i = 1; i <= 10; i++) {
        console.log(`${ numero } x ${i} = ${i * numero}`);
    }
}

// tabla_del_5_(5);

module.exports = calcular_tabla_numerica



