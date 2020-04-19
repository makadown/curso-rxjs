/* Ejercicio con método merge 
- Tampoco confundir con el operador merge, está obsoleto
*/

import { fromEvent, merge, scheduled } from 'rxjs';
import { pluck } from 'rxjs/operators';


const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

merge( 
    keyup$.pipe(pluck('type')),
    click$.pipe(pluck('type'))
).subscribe(console.log);