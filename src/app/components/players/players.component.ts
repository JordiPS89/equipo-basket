import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JUGADORES } from '../../data/jugadores';
import { JugadorFiltroPipe } from '../../pipes/jugador-filtro.pipe';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule, DetailComponent, FormsModule, JugadorFiltroPipe],
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent {
  filtroNombre: string = '';
  filtroEdad: string = '';
  filtroPosicion: string = '';

  jugadores = JUGADORES;
  jugadorSeleccionado: any = null;
  seleccionarJugador(jugador: any) {
    this.jugadorSeleccionado = jugador;
  }




  
}
