import { of, interval, fromEvent } from 'rxjs';
import { mergeMap, take, map, takeUntil } from 'rxjs/operators';

const letras$ = of('a', 'b', 'c');
/* 
// este ejercicio imprime: a0, b0, c0, a1, b1, c1, a2, b2, c2 y completa
letras$.pipe(
    mergeMap( (letra) => interval(100).pipe(
        map( i => letra + i),
        take(3)
    ))
)
.subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
});  */


// este ejercicio emite numeros mientras haga click izq de mouse (mousedown)
// y se detiene cuando el botón ha sido liberado (mouseup).
const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mouseDown$
    .pipe( 
         mergeMap(() => interval$.pipe(takeUntil(mouseUp$)))
     )
    .subscribe(console.log);