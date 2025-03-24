import { Component, HostListener } from '@angular/core';
import { PlayersComponent } from './components/players/players.component';
import { DetailComponent } from './components/detail/detail.component';
import { MediaComponent } from './components/media/media.component'; // ✅

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayersComponent, DetailComponent, MediaComponent], // ✅
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jugadorSeleccionado: any = null;

  mostrarDetalle(jugador: any) {
    this.jugadorSeleccionado = jugador;
  }

  @HostListener('document:click', ['$event'])
  cerrarDetalleSiClickFuera(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    const esClickDentroDelDetalle = clickedElement.closest('.detalle-container');
    const esClickEnLista = clickedElement.closest('.jugadores-lista');

    if (!esClickDentroDelDetalle && !esClickEnLista && this.jugadorSeleccionado) {
      this.jugadorSeleccionado = null;
    }
  }
}
