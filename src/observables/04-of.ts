import { of } from 'rxjs';

// const obs$ = of(1,2,3,4,5,6);
// const obs$ = of(...[1,2,3,4,5,6],2,3,4,5);
const obs$ = of( [1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true) );

console.log('Iniciando observable');
/* En este caso, el observable está trabajando de manera Síncrona */
obs$.subscribe( 
    next => console.log('next', next),
    null,
    () => console.log('Terminamos!')
);
console.log('Fin de observable');