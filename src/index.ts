import { range, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

/* range(1,5).pipe(
   // map( x => x*10 )
   // map< tipo de dato que recibe en funcion flecha, tipo de dato a retornar> 
   map<number, string>( val => (val * 10).toString() )
).subscribe(console.log); */

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

keyup$.pipe(
    map( e => e.code )
)
.subscribe( console.log ) ;