import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'furniture',
    templateUrl: './furniture.component.html'
})
export class FurnitureComponent implements OnInit {
    title = 'Furniture';
    ngOnInit() {
        console.log('furniture.component cargado !! ');
    }
}
