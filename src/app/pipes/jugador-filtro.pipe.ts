import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jugadorFiltro',
  standalone: true
})
export class JugadorFiltroPipe implements PipeTransform {
  transform(jugadores: any[], nombre: string, posicion: string): any[] {
    if (!jugadores) return [];

    return jugadores.filter(jugador => {
      const coincideNombre = nombre ? jugador.nombre.toLowerCase().includes(nombre.toLowerCase()) : true;
      const coincidePosicion = posicion ? jugador.posicion.toLowerCase().includes(posicion.toLowerCase()) : true;
      return coincideNombre && coincidePosicion;
    });
  }
}
