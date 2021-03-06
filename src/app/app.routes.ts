import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {DetalleComponent} from './detalle/detalle.component';
import {LugaresComponent} from './lugares/lugares.component';
import {ContactoComponent} from './contacto/contacto.component';
import {CrearComponent} from './crear/crear.component';
import {LoginComponent} from './login/login.component';
import {RegistroComponent} from './registro/registro.component';
import {LogueadoGuard} from './services/logueado.guard';

const routes: Routes = [
  {path: 'lugares', component: LugaresComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'crear', component: CrearComponent, canActivate: [LogueadoGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '**', redirectTo: 'lugares', pathMatch: 'full'},
];

export const app_rountig = RouterModule.forRoot(routes);
