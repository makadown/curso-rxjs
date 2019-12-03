import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]:', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('Completado [obs]')
};

// const obs$ = Observable.create();
const obs$ = new Observable<string>(subs => {
  subs.next('Hola');
  subs.next('Mundo');

  subs.next('Hola');
  subs.next('Mundo');

  // forzar un error...
  // const a = undefined;
  // a.nombre = 'Mayito';

  subs.complete();
  // este no se mostrara en log por el complete()
  subs.next('Hola');
  subs.next('Mundo');
});

obs$.subscribe(observer);

// obs$.subscribe( console.log );
/*obs$.subscribe(
  valor => console.log('next: ', valor),
  error => console.warn('error papu!: ', error),
  () => console.info('Completado!')
);*/
