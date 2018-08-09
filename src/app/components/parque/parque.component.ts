import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck } from '@angular/core';
@Component({
    selector: 'parque',
    templateUrl: './parque.component.html'
})
export class ParqueComponent implements OnChanges, OnInit, DoCheck {
    @Input() nombre: string;
    @Input('metros_cuadrados') metros: number;
    public veguetacion: string;
    public abierto: boolean;

    @Output() pasameLosDatos = new EventEmitter;

    constructor() {
        this.nombre = 'Parque Nacional Cotopaxi';
        this.metros = 1000;
        this.veguetacion = 'Alta';
        this.abierto = true;
    }

    ngOnChanges(changes: SimpleChanges) {
        //console.log(changes):
        console.log('Existen Cambios');
    }
    ngOnInit() {
        console.log('Metodo On Init Iniciado');
    }

    ngDoCheck(){
        console.log('Metodo Do Check Iniciado');
    }

    emitirEvento() {
        this.pasameLosDatos.emit({
            'nombre' : this.nombre,
            'metros' : this.metros,
            'veguetacion' : this.veguetacion,
            'abierto' : this.abierto
        });

    }
}
