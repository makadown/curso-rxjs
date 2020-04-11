/** Ejercicio con auditTime */

import { fromEvent } from 'rxjs';
import { auditTime, tap, pluck, map } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');
/**
 * auditTime permite ignorar un observable por un tiempo determinado.
 *           Una vez que un observable emite, corre el tiempo especificado el
 *           auditTime. Cuando termina el tiempo, se emite el ultimo valor que
 *           emitió el observable (en caso de haber intentado mas emisiones)
 */
click$.pipe(
    map( ({x}) => x),
    tap( val => console.log('tap', val)),
    auditTime(2000)
).subscribe(console.log);