import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jugadorFiltro',
  standalone: true
})
export class JugadorFiltroPipe implements PipeTransform {
  transform(jugadores: any[], filtroName: string,filtroEdad: string, filtroPosicion: string): any[] {
    if (!jugadores) {
      return jugadores;
    }
    let resultados = jugadores;
    if(filtroName != ''){
      filtroName = filtroName.toLowerCase();
      resultados= resultados.filter(jugador =>
        jugador.nombre.toLowerCase().includes(filtroName));
    }
    if(filtroEdad != ''){
      filtroEdad = filtroEdad.toLowerCase();
      resultados= resultados.filter(jugador =>
        jugador.edad.toString().includes(filtroEdad));
    }
    if(filtroPosicion != ''){
      filtroPosicion = filtroPosicion.toLowerCase();
      resultados= resultados.filter(jugador =>
        jugador.posicion.toLowerCase().includes(filtroPosicion));
    }

    return resultados;
  }
}
