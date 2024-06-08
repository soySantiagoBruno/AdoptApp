import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { InfoMascotaComponent } from "./info-mascota/info-mascota.component";
import { HomeUsuarioComponent } from "./home-usuario/home-usuario.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, HomeComponent, FooterComponent, InfoMascotaComponent, HomeUsuarioComponent]
})
export class AppComponent {
  title = 'frontend-adoptapp';
}
