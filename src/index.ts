import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
  next: value => console.log('[next]:', value),
  error: error => console.warn('[error]: ', error),
  complete: () => console.info('[completado]')
};

const intervalo$ = new Observable<number>(subs => {
  const intervalID = setInterval(() => subs.next(Math.random()), 1000);

  return () => clearInterval(intervalID); 
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
intervalo$.subscribe( subject$ );


// const subs1 = intervalo$.subscribe( rnd => console.log('subs1', rnd) );
// const subs2 = intervalo$.subscribe( rnd => console.log('subs2', rnd) );

const subs1 = subject$.subscribe( rnd => console.log('subs1', rnd) );
const subs2 = subject$.subscribe( rnd => console.log('subs2', rnd) );