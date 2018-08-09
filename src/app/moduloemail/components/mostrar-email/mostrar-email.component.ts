import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'mostrar-email',
  template: `
 
  <div *ngIf="emailContacto"> <strong>Email Contacto:</strong>  {{emailContacto}}
    <h4>{{title}}</h4>
    <button (click)="borrarEmail()">Eliminar email de contacto</button>
  </div>
  `,
})
export class MostrarEmailComponent implements DoCheck, OnInit {
  title = 'Mostrar Email';
  emailContacto: string;

  ngOnInit() {
    this.emailContacto = localStorage.getItem('emailContacto');
    // console.log(localStorage.getItem('emailContacto'));
  }

  ngDoCheck() {
    this.emailContacto = localStorage.getItem('emailContacto');
    // console.log('El Docheck se ha ejecuado');
  }

  borrarEmail() {
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null;
  }
}