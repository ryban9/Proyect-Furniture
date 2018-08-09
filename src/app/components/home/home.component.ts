import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    title = '¡Muebles Don Paco, Calidad y Tradición!';
    ngOnInit() {
        console.log('home.component cargado !! ');
    }
}
