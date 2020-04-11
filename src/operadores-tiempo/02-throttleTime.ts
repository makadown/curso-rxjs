/* *Ejercicio con throttleTime */

import { debounceTime, pluck, distinctUntilChanged, throttleTime } from 'rxjs/operators';
import { fromEvent, asyncScheduler } from 'rxjs';

const clickDebounce$ = fromEvent(document, 'click');
clickDebounce$.pipe(
    debounceTime(3000) 
    // debounceTime primero prepara el elemento a emitir, ignora cualquier otra emision,
    //  espera y luego emite el elemento preparado!
).subscribe( () => console.log('debounce click'));

const clickThrottle$ = fromEvent(document, 'click');
clickThrottle$.pipe(
    throttleTime(3000) 
    // throttleTime primero emite y luego espera ignorando cualquier emision
).subscribe( () => console.log('throttle click'));


// ejemplo 2 
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$.pipe(
    // Esto funciona igual que un debounceTime(1000)
    throttleTime(1000, asyncScheduler, {
        leading: false, // si quiero el primer element
        trailing: true // si quiero el ultimo elemento
    }),
    pluck('target','value'),
    distinctUntilChanged()
).subscribe(console.log);