import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JugadorFiltroPipe } from '../../pipes/jugador-filtro.pipe';
import { JUGADORES } from '../../data/jugadores';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule, FormsModule, JugadorFiltroPipe], // DetailComponent eliminado porque no se usa aquí
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {
  // Lista de jugadores y filtros
  jugadores = JUGADORES;
  filtroNombre: string = '';
  filtroPosicion: string = '';

  // Jugador seleccionado (usado solo para emitir al padre)
  jugadorSeleccionado: any = null;

  // Comunicación con el componente padre (app.component)
  @Output() jugadorSeleccionadoEvent = new EventEmitter<any>();

  seleccionarJugador(jugador: any) {
    this.jugadorSeleccionado = jugador;
    this.jugadorSeleccionadoEvent.emit(jugador);
  }
}
