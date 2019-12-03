import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('[next]:', value),
  error: error => console.warn('[error]: ', error),
  complete: () => console.info('[completado]')
};

/* Cold Observable: Cuando la data es producida por el observable en sí mismo. */
const intervalo$ = new Observable<number>(subs => {
  const intervalID = setInterval(() => subs.next(Math.random()), 1000);

  return () => {
    clearInterval(intervalID);
    console.log('intervalo destruido');
  };
});

/**
 * Características del subject
 * 1 - Casteo múltiple. Muchas suscripciones van a estar sujetas a este mismo subject y va a servirme
 *                      para distribuir la misma información a todos los lugares a donde estén suscritos o
 *                      a todos los lugares que les interese ese valor.
 * 2 - También es un Observer.
 * 3 - Next, error y complete.
 */
const subject$ = new Subject();
/**
 * Este subscription es necesario para destruir el intervalo del observable intervalo$
 * En el timeout que esta mas abajo, lo desuscribo para lograrlo.
 */
const subscription = intervalo$.subscribe(subject$);
// el subject en este caso hace que los dos subscribers tengan el mismo data
const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
  /* Hot Observable: Cuando el dato es producido fuera del observable. El subject es el que permite esto. */
  subject$.next(10);

  subject$.complete();
  
  subscription.unsubscribe();
}, 3500);
