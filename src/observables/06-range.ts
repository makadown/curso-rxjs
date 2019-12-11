 import { of, range, asyncScheduler } from 'rxjs';

// const src$ = of(1,2,3,4,5);
// const src$ = range(1,10);

/* Inicia en -5 y desde ahí contea a 10 */
// const src$ = range(-5,10);

/* inicia en 0 por default y contea a 10 */
// const src$ = range(10);

/* inicia de 1 y cuenta 5 de manera asincrona */
const src$ = range(1,5,asyncScheduler);

console.log('inicio')
 src$.subscribe(console.log);
 console.log('fin');