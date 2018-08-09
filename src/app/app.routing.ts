import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { TiendaComponent } from './components/tienda/tienda.component';
import { FinishedComponent } from './components/finished/finished.component';
import { FurnitureComponent } from './components/furniture/furniture.component';
import { FurnitureTypeComponent } from './components/furniture_Type/furnitureType.component';
import { HomeComponent } from './components/Home/home.component';
import { MaterialComponent } from './components/material/material.component';
import { UserComponent } from './components/user/user.component';
import { UserTypeComponent } from './components/user_Type/userType.component';
import { ContactComponent } from './components/contact/contact.component';

const appRoutes: Routes = [
    // { path: '' , component: HomeComponent },
    { path: '' , redirectTo: 'home', pathMatch: 'full' },
    { path: 'tienda' , component: TiendaComponent },
    { path: 'finished' , component: FinishedComponent },
    { path: 'furniture' , component: FurnitureComponent },
    { path: 'furniture_Type' , component: FurnitureTypeComponent },
    { path: 'home' , component: HomeComponent },
    { path: 'material' , component: MaterialComponent },
    { path: 'user' , component: UserComponent },
    { path: 'user_Type' , component: UserTypeComponent },
    { path: 'contact' , component: ContactComponent },
    { path: '**' , component: HomeComponent }
];

export const appRoutigProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);