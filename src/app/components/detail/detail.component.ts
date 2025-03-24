import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaComponent } from '../media/media.component';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, MediaComponent],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() jugador: any;
  // Método para llamar al método cerrarModal del componente Player
  cerrarModal() {
    this.jugador = null;
  }



}

