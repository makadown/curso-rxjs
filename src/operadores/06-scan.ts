/* 
scan es igual que el reduce con la diferencia de que cuando 
los valores son emitidos por el observable, inmediatamente van
saliendo como van ingresando pero regresa su valor acumulado.
*/
import { scan, reduce, map } from "rxjs/operators";
import { from } from "rxjs";

const numeros = [1,2,3,4,5];

/*const totalAcumulador = (acc, cur) => {
    return acc + cur ;
};*/
const totalAcumulador = (acc, cur) => acc + cur ;

console.log('aqui viene el reduce...');
// reduce, aqui se imprime 1 sola vez
from(numeros).pipe(
    reduce(totalAcumulador, 0)
)
.subscribe(console.log);

console.log('aqui viene el scan...');
/* scan, aqui se imprime 5 veces, 1 + 2, 
    luego el 3 + 3 , luego el 6 + 4, y finalmente el 10 + 5 */
from(numeros).pipe(
    scan(totalAcumulador, 0)
)
.subscribe(console.log);


// Redux
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
};

const user: Usuario[] = [
    { id: 'mario', autenticado: false, token: null},
    { id: 'mario', autenticado: true, token: 'abc'},
    { id: 'mario', autenticado: true, token: 'abc132'},
    { id: 'mario', autenticado: true, token: 'abc456'},
];

const state$ = from( user ).pipe(
    scan<Usuario>( (acc, cur) => {
        return {...acc, ...cur}
    }, { edad: 33 })
);

const id$ = state$.pipe(
    map(state => state.id)
);

id$.subscribe(console.log);