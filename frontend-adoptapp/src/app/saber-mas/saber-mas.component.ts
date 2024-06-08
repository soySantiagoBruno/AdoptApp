import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { CarruselComponent } from "../carrusel/carrusel.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-saber-mas',
    standalone: true,
    templateUrl: './saber-mas.component.html',
    styleUrl: './saber-mas.component.css',
    imports: [FooterComponent, CarruselComponent, NavbarComponent]
})
export class SaberMasComponent {

}
