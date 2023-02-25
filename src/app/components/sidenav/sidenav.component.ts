import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  librerias = [
    { id: 'Recientes', name: 'Recientes' },
    { id: 'artistas', name: 'Artistas' },
    { id: 'albums', name: 'Álbums' },
    { id: 'canciones', name: 'Canciones' },
    { id: 'estaciones', name: 'Estaciones' }
  ]

  playlists = [
    { id: 'metal', name: 'Metal' },
    { id: 'bailar', name: 'Para bailar' },
    { id: 'rock', name: 'Rock 90s' },
    { id: 'baladas', name: 'Baladas' }
  ]

}
