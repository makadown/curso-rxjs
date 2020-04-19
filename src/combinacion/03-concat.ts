/* Ejercicio con función concat 
- Este es una funcion, no es un operador.
- El operador concat está obsoleto.
- No confundirlo con concatMap
*/

import { interval, concat } from 'rxjs';
import { take } from 'rxjs/operators';

const interval$ = interval(1000);

concat ( 
    interval$.pipe ( take(3) ),
    interval$.pipe ( take (2))
).subscribe( console.log );