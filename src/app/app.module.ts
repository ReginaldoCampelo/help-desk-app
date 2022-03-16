import { NgModule } from '@angular/core';

import { CoreModule } from "./core/core.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { TecnicoListComponent } from './components/tecnico/tecnico-list/tecnico-list.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    TecnicoListComponent,
    LoginComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule,

  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
