import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteMostrarTodosComponent } from './cliente/cliente-mostrar-todos/cliente-mostrar-todos.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ClienteComponent,
    ClienteMostrarTodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
