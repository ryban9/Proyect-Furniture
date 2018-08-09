import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'furnitureType',
    templateUrl: './furnitureType.component.html'
})
export class FurnitureTypeComponent implements OnInit {
    title = 'FurnitureType';
    ngOnInit() {
        console.log('furnitureType.component cargado !! ');
    }
}
