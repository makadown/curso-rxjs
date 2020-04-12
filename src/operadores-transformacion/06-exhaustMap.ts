/* Ejercicio con exhaustMap */

import { interval, fromEvent } from 'rxjs';
import { take, switchMap, concatMap, exhaustMap } from 'rxjs/operators';


const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

/* el exhaustMap manda a chingar a su madre cualquier otra suscripcion mientras no haya
terminado su suscripcion activa. */
click$
.pipe(
    exhaustMap( () => interval$ )
)
.subscribe(console.log);


