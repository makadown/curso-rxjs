 /** Ejercicio de switchMap vs mergeMap */

import { fromEvent, interval } from 'rxjs';
import { mergeMap, tap, switchMap } from 'rxjs/operators';

 const click$ = fromEvent(document, 'click');
 const interval$ = interval(1000);

 // en este ejemplo, al hacer click, se suscribe al intervalo para comenzar a emitir valores.
 // si vuelvo a hacer click, se crea OTRA suscripcion, si hago otro click, se crea OTRO observable,
 // y asi sucesivamente. De modo que al hacer muchas veces click, se harán 'n' intervalos emitiendo
 // valores empezando desde cero.
 /* click$.pipe(
    mergeMap( () => interval$ ),
 ).subscribe(console.log);
 */

 // en este ejemplo, el switchMap cancela el observable anterior que se haya hecho de modo
 // que siempre habrá 1 solo observable emitiendo
 click$.pipe(
    switchMap( () => interval$ ),
 ).subscribe(console.log);