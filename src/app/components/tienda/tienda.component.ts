import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'tienda',
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
    public titulo;
    public nombreDelParque: string;
    public miParque;

    constructor() {
        this.titulo = 'Esta es la tienda';
    }

    ngOnInit() {
        $('#textojq').hide();
        $('#botonjq').click(function() {
            console.log('Click');
            $('#textojq').slideToggle();
        });
    }

    mostrarNombre() {
        console.log(this.nombreDelParque);
    }
    verDatosParque(event) {
        console.log(event);
        this.miParque = event;
    }
}
