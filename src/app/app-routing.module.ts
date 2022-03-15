import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TecnicoListComponent } from './components/tecnico/tecnico-list/tecnico-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  
  { path: '', component: NavbarComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: 'tecnicos', component: TecnicoListComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
