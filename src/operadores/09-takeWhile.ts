/* ejercicio con operador takeWhile */

import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>( document, 'click' );

click$.pipe(
    map( ({x,y}) => ({x,y}) ),
   // takeWhile( ({y}) => y <= 150 )
   takeWhile( ({y}) => y <= 150, true )
)
.subscribe( {
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
} );
/* Normalmente el takewhile emite en next todo excepto el ultimo valor que provoca el 
complete. Si yo quiero ver dicho ultimo valor, puedo utilizar el parametro 'true' para permitir eso. */