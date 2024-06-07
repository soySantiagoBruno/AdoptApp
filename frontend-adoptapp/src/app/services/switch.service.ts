import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchService {

  constructor() { }

  // Creo un observable para comunicar el componente info-mascota con carrusel
  $modal= new EventEmitter<any>();
}
