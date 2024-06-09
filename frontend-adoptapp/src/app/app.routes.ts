import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SaberMasComponent } from './saber-mas/saber-mas.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InfoMascotaComponent } from './info-mascota/info-mascota.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'saber-mas', component: SaberMasComponent},
    {path: 'info-mascota', component: InfoMascotaComponent},

    //{path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent }
];
