import { range } from "rxjs";
import { tap, map } from "rxjs/operators";

const numero$ = range(1,5);

numero$.pipe(
    tap( x => {
        console.log('tap: ' + x);
        return 100;
    }),
    map( val => val * 10),
    tap( {
        next: valor => console.log('tap 2: ', valor),
        complete: () => console.log('Se terminó todo')
    } ) 
)
.subscribe(val => console.log( 'subs', val ));
