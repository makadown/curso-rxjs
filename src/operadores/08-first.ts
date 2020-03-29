/* Ejercicio de operador first */

import { fromEvent } from 'rxjs';
import { take, first, tap, map } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');

/* en este caso first() es lo mismo que take(1) */
/*click$.pipe(first()).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
});*/


/* en este caso puedo usar un predicate con first() */
/*click$.pipe(
    tap<any>( () => console.log('tap') ),
    first<MouseEvent>( event => event.clientY >= 150 )
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
});*/

/* Ejercicio con destructuracion JavaScript */
click$.pipe(
    tap<any>( console.log ),
   /*  map( (event: MouseEvent) => ({
        clientY: event.clientY,
        clientX: event.clientX
    }) ) */
    map( ({ clientX, clientY }) => ({ clientY, clientX }) ),
    first( event => event.clientY >= 150 )
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
});