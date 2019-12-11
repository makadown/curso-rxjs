import {from, of} from 'rxjs';

/**
 * of = toma argumentos y genera secuencia de valores.
 * from = crea a base de array, puede sere promise, iterable, observable
 */

 const observer = {
     next: val => console.log('next:', val),
     complete: () => console.log('complete')
 };


 /**
  * Esta funcion se encarga de generar un valor cada vez que se solicite el siguiente valor
  */
 const miGenerador = function*() {
     yield 1;
     yield 2;
     yield 3;
     yield 4;
     yield 5;
 };

 const miIterable = miGenerador();

 /*
 for(let id of miIterable) {
     console.log(id);
 } */
from(miIterable).subscribe(observer);

 // from, genera 1 2 3 4 5, 5 objects por separado
// const source$ = from([1,2,3,4,5]);

// of genera el arreglo [1,2,3,4,5], un objeto
// const source$ = of([1,2,3,4,5]);

// si quiero que sean por separado utilizo el operador spread (...)
// const source$ = of(...[1,2,3,4,5]);

// con el from, se mandarian las letras por separado
// const source$ = from('Mayito');

const source$ = from( fetch('https://api.github.com/users/makadown') );
/*
source$.subscribe( async(resp) => {
    console.log(resp);
    const dataResp = await resp.json();
    console.log(dataResp);
});*/

// source$.subscribe(observer);

