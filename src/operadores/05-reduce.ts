/* reduce
Aplica una funcion acumuladora a las emisionas producidas por el observable */

import { interval } from "rxjs";
import { take, reduce, tap } from "rxjs/operators";

const numbers = [1,2,3,4,5];
const totalReducer = ( acumulador: number, valorActual: number ) => {
    return acumulador + valorActual;
};
/*
 // asi funciona en JS
const total = numbers.reduce(totalReducer, 0);
console.log('total arr', total);*/

interval(500).pipe(
    take(6),
    tap( console.log ),
    reduce(totalReducer)
)
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('Complete')
});

















