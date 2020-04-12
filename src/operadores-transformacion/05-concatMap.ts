/* Ejercicio de concatMap */

import { interval, fromEvent } from 'rxjs';
import { take, switchMap, concatMap } from 'rxjs/operators';


const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

/* concatMap mete en una cola de observables, de modo que cada observable debe
esperar a que el anterior se complete. */
click$
.pipe(
    concatMap( () => interval$ )
)
.subscribe(console.log);
