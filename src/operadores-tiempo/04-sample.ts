/** Ejercicio con sample */
import { interval, fromEvent } from 'rxjs';
import { sample } from 'rxjs/operators';

const interval$ = interval(500);
const click$    = fromEvent(document, 'click');

/* En este ejercicio tenemos un intervalo que cada 500 milisegundos emite un 
valor que se va acumulado +1. El sample, permite que solamente dicho valor
se emita al hacer un click  */
interval$.pipe(
    sample(click$)
).subscribe(console.log);