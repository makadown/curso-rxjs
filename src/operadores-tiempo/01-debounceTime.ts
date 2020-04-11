/* *Ejercicio con debounceTime */

import { debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

const click$ = fromEvent(document, 'click');
click$.pipe(
    debounceTime(3000)
); // .subscribe(console.log);

// ejemplo 2 
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$.pipe(
    debounceTime(1000),
    pluck('target','value'), /* tomo propiedad target.value */
    distinctUntilChanged() /* que no emita el mismo string */
).subscribe(console.log);