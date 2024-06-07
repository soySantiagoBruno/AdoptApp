import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { CarruselComponent } from "../carrusel/carrusel.component";
import { InfoMascotaComponent } from "../info-mascota/info-mascota.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [FooterComponent, CarruselComponent, InfoMascotaComponent]
})
export class HomeComponent {

}
