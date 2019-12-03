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

  /* Este pedazo se ejecuta cuando se invoca un unsuscribe */
  return () => {
    clearInterval(intervalo);
    console.log('Intervalo destruido');
  }
});

const suscripcion2 = intervalo$.subscribe();
const suscripcion3 = intervalo$.subscribe();
const suscripcion1 = intervalo$.subscribe();


setTimeout(() => {
    suscripcion1.unsubscribe();
    suscripcion2.unsubscribe();
    suscripcion3.unsubscribe();
    console.log('Completado');
}, 3000);