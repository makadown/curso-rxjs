import { range, fromEvent } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

/* range(1,5).pipe(
   // map( x => x*10 )
   // map< tipo de dato que recibe en funcion flecha, tipo de dato a retornar> 
   map<number, string>( val => (val * 10).toString() )
).subscribe(console.log); */

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyup$.pipe(
    map( e => e.code )
);

// Aquí tengo que saber exactamente el nombre de la propiedad recibida
const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
);

keyup$.subscribe(console.log);
keyupCode$.subscribe( code =>  console.log('map', code) ) ;

keyupPluck$.subscribe( code => console.log('pluck', code) ) ;