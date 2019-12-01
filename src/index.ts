import { Observable } from 'rxjs'

// const obs$ = Observable.create();
const obs$ = new Observable<string>( subs => {
    subs.next('Hola');
    subs.next('Mundo');

    subs.complete();
// este no se mostrara en log por el complete()
    subs.next('caca');
});

obs$.subscribe( console.log );






