/*  Ejercicios intensivos de forkJoin */

import { of, interval, forkJoin } from 'rxjs';
import { take, delay } from 'rxjs/operators';

const numeros$ = of(1,2,3,4,5);
const intervalo$ = interval(1000).pipe( take(3) ); // 0.. 1 .. 2
const letras$ = of('a','b','c').pipe(delay(3500));


// en este ejemplo, se regresa un arreglo de 3 elementos, que son los 
// ultimos elementos que emiten los observables: [5,2,'c']
forkJoin(
    numeros$,
    intervalo$,
    letras$
).subscribe(console.log);

// En este ejemplo se regresa un objeto de 3 propiedades, que son
// los ultimos elementos emitidos. Nótese como se envia el {} para dar
// la estructura. Esto generará las propiedades con nombre 'numeros$',
// 'intervalo$' y 'letras$'
forkJoin({
    numeros$,
    intervalo$,
    letras$
}).subscribe(console.log);

// este ejemplo es como el anterior pero aqui personalizamos las propiedades
forkJoin({
    orale: numeros$,
    papi: intervalo$,
    chulo: letras$
}).subscribe(console.log);
