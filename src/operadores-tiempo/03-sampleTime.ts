/* *Ejercicio con sampleTime */

import { debounceTime, pluck, distinctUntilChanged, throttleTime, map, sampleTime } from 'rxjs/operators';
import { fromEvent, asyncScheduler } from 'rxjs';

const click$ = fromEvent<MouseEvent>(document, 'click');

/* es mejor poner el sampleTime aqui porque es menos procesamiento, es decir,
 si lo pongo arriba, recibe y procesa todo el mouse event. Pero abajo solo 
 recibe la estructura {x,y}, lo cual es mucho menos pesado para procesar */
click$
    .pipe(
        map(({ x, y }) => ({ x, y })),
        sampleTime(2000), 
    )
    .subscribe(console.log)