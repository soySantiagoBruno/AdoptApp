import { Component } from '@angular/core';
import { NavbarUsuarioComponent } from "../navbar-usuario/navbar-usuario.component";
import { CassuselGatosComponent } from '../cassusel-gatos/cassusel-gatos.component';
import { CassuselPerrosComponent } from '../cassusel-perros/cassusel-perros.component';

@Component({
    selector: 'app-home-usuario',
    standalone: true,
    templateUrl: './home-usuario.component.html',
    styleUrl: './home-usuario.component.css',
    imports: [NavbarUsuarioComponent, CassuselGatosComponent, CassuselPerrosComponent]
})
export class HomeUsuarioComponent {

}
