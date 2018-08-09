import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'material',
    templateUrl: './material.component.html'
})
export class MaterialComponent implements OnInit {
    title = 'Material';
    ngOnInit() {
        console.log('material.component cargado !! ');
    }
}
