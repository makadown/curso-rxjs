/**
 * Ejercicio 01: 
 * El objetivo de es realizar la misma impresión, pero usando observables
 * Nota: NO hay que usar el ciclo "FOR OF", usar un observable y llamar la función capitalizar
 */

import { from } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Salida esperada:
 * Batman
 * Joker
 * Doble Cara
 * Pingüino
 * Hiedra Venenosa
 */
(() =>{


    const nombres = ['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa'];
  
    const capitalizar = (nombre: string) => nombre.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

    const nombres$ = from( nombres );
    // este ciclo con observables, es síncrono
    nombres$.pipe(
        map( capitalizar )
    ).subscribe(console.log);
    
  })();
  
  