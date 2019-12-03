import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('[next]:', value),
  error: error => console.warn('[error]: ', error),
  complete: () => console.info('[completado]')
};

const intervalo$ = new Observable<number>(subscriber => {
  let contador = 1;
  // Creando contador.
  const intervalo = setInterval(() => {
    // cada segundo
    subscriber.next(contador);
    console.log(contador);
    contador++;
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 2500);
  /* Este pedazo se ejecuta cuando se invoca un unsuscribe */
  return () => {
    clearInterval(intervalo);
    console.log('Intervalo destruido');
  };
});

const suscripcion2 = intervalo$.subscribe(observer);
const suscripcion3 = intervalo$.subscribe(observer);
const suscripcion1 = intervalo$.subscribe(observer);

// con esto, al desuscribir suscripcion1, se desinscriben los demas
suscripcion1.add( suscripcion2 ).add( suscripcion3);

setTimeout(() => {
  suscripcion1.unsubscribe();
 /* suscripcion2.unsubscribe();
  suscripcion3.unsubscribe();*/
  console.log('Completado timeout');
}, 6000);
