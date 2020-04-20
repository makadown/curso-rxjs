import { ajax } from 'rxjs/ajax';
import { switchMap, map, mergeMap, mergeAll, tap, pluck, concatMap } from 'rxjs/operators';
import { zip, of, Subject } from 'rxjs';

/**
 * Ejercicio: 
 *  Realizar 2 peticiones HTTP (ajax) una después de otra.
 *  
 *  La primera debe de obtener el personaje de Star Wars:
 *   Luke Skywalker, llamando el endpoint:   /people/1/
 * 
 *  La segunda petición, debe de ser utilizando el objeto
 *  de la petición anterior, y tomar la especie (species),
 *  que es un arreglo de URLs (array), dentro de ese arreglo, 
 *  tomar la primera posición y realizar la llamada a ese URL,
 *  el cual debería de traer información sobre su especie (Human)
 */

// Respuesta esperada:
// Información sobre los humanos en el universo de Star Wars
// Ejemplo de la data esperada
/*
 { name: "Human", classification: "mammal", designation: "sentient", average_height: "180", skin_colors: "caucasian, black, asian, hispanic", …}
*/

// Respuesta esperada con Mayor dificultad
// Retornar el siguiente objeto con la información de ambas peticiones
// Recordando que se disparan una después de la otra, 
// con el URL que viene dentro del arreglo de 'species'

// Tip: investigar sobre la función zip: 
//      Que permite combinar observables en un arreglo de valores
// https://rxjs-dev.firebaseapp.com/api/index/function/zip

// Ejemplo de la data esperada:
/*
    especie: {name: "Human", classification: "mammal", designation: "sentient", average_height: "180", skin_colors: "caucasian, black, asian, hispanic", …}
    personaje: {name: "Luke Skywalker", height: "172", mass: "77", hair_color: "blond", skin_color: "fair", …}
*/


(() =>{

    // No tocar ========================================================
    const SW_API = 'https://swapi.py4e.com/api/'; // 'https://swapi.dev/api';                     
    const getRequest = ( url: string ) => ajax.getJSON<any>(url);
    // ==================================================================
    

    /********************************************************/
    /****************** Mi solucion 1 ************************/
    const getLuke = getRequest(`${SW_API}/people/1/`);
    getLuke.pipe(
        pluck<any, string[]>( 'species' ),
        concatMap( (species: string[]) => getRequest(species[0]) )
        // la respuesta del profe es:
        // switchMap( resp => getRequest( resp.species[0] ) )

    // NO TOCAR el subscribe ni modificarlo ==
    ).subscribe( console.log );          // ==
    // =======================================
    /****************** Mi solucion 1 ************************/
    /********************************************************/


    /******************************************************/
    /****************** Mi solucion 2 ************************/
    const solucionHard = [];
    const getLukeHard = getRequest(`${SW_API}/people/1/`);
    getLukeHard.pipe(
        tap( (resp: any) => solucionHard.push({personaje: resp}) ),
        pluck<any, string[]>( 'species' ),
        concatMap( (species: string[]) => {
            return getRequest(species[0]);} ),
        map( (resp: any) => {
            solucionHard.unshift({especie: resp});
            return solucionHard;
        })).subscribe( console.log );
    /****************** Mi solucion 2 ************************/
    /******************************************************/


     /***************************************************************/
    /****************** solucion 2 del profe ************************/
    const getLukeProfe = getRequest(`${SW_API}/people/1/`);
    // Realizar el llamado al URL para obtener a Luke Skywalker
    getLukeProfe.pipe(
        switchMap( resp => zip( of(resp), getRequest( resp.species[0]))),
        map(([personaje, especie]) => ({especie, personaje}))
        ).subscribe( console.log );
    /****************** solucion 2 del profe ************************/
    /*****************************************************************/
})();

		
