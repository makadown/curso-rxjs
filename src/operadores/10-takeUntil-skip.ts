/* Ejercicio takeUntil */

import { interval, fromEvent } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer (skip)';

document.querySelector('body').append(boton);

const counter$ = interval(1000);

// const clickBtn$ = fromEvent( boton, 'click' );
// ejercicio con operador skip para provocar que se presione 2 veces boton y detener el intervalo
const clickBtn$ = fromEvent( boton, 'click' ).pipe(
    tap( () => {boton.innerHTML = 'Detener Timer (ora si)'; }),
    skip(1),
    tap( () => console.log('tap despues del skip'))
);

counter$.pipe(
    takeUntil(clickBtn$)
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
});