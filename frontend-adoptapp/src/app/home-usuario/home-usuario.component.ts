import { Component } from '@angular/core';
import { NavbarUsuarioComponent } from "../navbar-usuario/navbar-usuario.component";
import { CarruselGatosComponent } from '../carrusel-gatos/carrusel-gatos.component';
import { CarruselPerrosComponent } from '../carrusel-perros/carrusel-perros.component';
import { FooterComponent } from "../footer/footer.component";
import { FiltroComponent } from "../filtro/filtro.component";
import { FooterDarkComponent } from "../footer-dark/footer-dark.component";

@Component({
    selector: 'app-home-usuario',
    standalone: true,
    templateUrl: './home-usuario.component.html',
    styleUrl: './home-usuario.component.css',
    imports: [NavbarUsuarioComponent, CarruselGatosComponent, CarruselPerrosComponent, FooterComponent, FiltroComponent, FooterDarkComponent]
})
export class HomeUsuarioComponent {

}
