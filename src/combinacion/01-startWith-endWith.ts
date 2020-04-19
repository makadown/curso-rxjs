import { of } from 'rxjs';
import { startWith, endWith } from 'rxjs/operators';


const numero$ = of(1,2,3).pipe(
    startWith('a', 'b', 'c'),
    endWith('x', 'y', 'z')
);

numero$.subscribe(console.log);