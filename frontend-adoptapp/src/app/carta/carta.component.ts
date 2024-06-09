import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InfoMascotaComponent } from "../info-mascota/info-mascota.component";

@Component({
    selector: 'app-carta',
    standalone: true,
    templateUrl: './carta.component.html',
    styleUrl: './carta.component.css',
    imports: [RouterLink, InfoMascotaComponent]
})
export class CartaComponent {

}
