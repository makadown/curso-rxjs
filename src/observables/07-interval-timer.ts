import { interval, timer } from 'rxjs';

// interval y timer son asyncronos por naturaleza

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete'),

};

// const interval$ = interval(0);
// const timer$ = timer(2000);

/* Este observable con timer(0) se ejecuta tan pronto como javascript y su stack de callbacks lo permita,
 NO significa que se ejecuta instantáneamente */
// const timer$ = timer(0);

/*  Con esto se crea un interval(1000) después de 2 segundos */
// const timer$ = timer(2000, 1000);


const hoyEn5 = new Date(); // ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const timer$ = timer(hoyEn5);

console.log('inicio');
// interval$.subscribe(observer);
timer$.subscribe(observer);
/* Una diferencia entre timer e interval es que timer SI efectua el complete del observer */
console.log('fin');