
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { routing, appRoutigProviders } from './app.routing';

// Importar nuestro nuevo modulo
import { ModuloemailModule } from './moduloemail/moduloemail.module';
import { AdminModule } from './admin/admin.module';


import { AppComponent } from './app.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParqueComponent } from './components/parque/parque.component';
import { FinishedComponent } from './components/finished/finished.component';
import { FurnitureComponent } from './components/furniture/furniture.component';
import { FurnitureTypeComponent } from './components/furniture_Type/furnitureType.component';
import { HomeComponent } from './components/Home/home.component';
import { MaterialComponent } from './components/material/material.component';
import { UserComponent } from './components/user/user.component';
import { UserTypeComponent } from './components/user_Type/userType.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParqueComponent,
    FinishedComponent,
    FurnitureComponent,
    FurnitureTypeComponent,
    HomeComponent,
    MaterialComponent,
    UserComponent,
    UserTypeComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ModuloemailModule,
    AdminModule
  ],
  providers: [
    appRoutigProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
