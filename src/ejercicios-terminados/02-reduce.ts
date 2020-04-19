import { from } from 'rxjs';
import { reduce, map, filter } from 'rxjs/operators';

/**
 * Ejercicio 02: 
 * Sume todos los números del arreglo usando un reduce.
 * Debe de filtrar para que sólo números sean procesados
 * La salida debe de ser 32
 * 
 * Tip:
 * isNan() es una función de JavaScript para determinar si es número
 * Usar filter<any>(...) para no tener problemas de tipado.
 */

(() => {


    const datos = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];
    const totalReducer = (acumulador: number, valorActual: number) => {
        return acumulador + valorActual;
    };

    from(datos).pipe(
        /* si lo dejo en map, si agrego un string numerico va a a contatenar lo demas que venga
        como string, y no lo va a sumar. Por eso es mejor hacerlo con filter */
        // map( (elem: any) => isNaN(elem) ? 0 : elem ),
        // filter es la solución
        filter<any>( elem => ! isNaN(elem)),
        reduce(totalReducer)
    ).subscribe(console.log) // La salida debe de ser 32



})();

