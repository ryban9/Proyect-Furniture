import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'finished',
    templateUrl: './finished.component.html'
})
export class FinishedComponent implements OnInit {
    title = 'Finished';
    ngOnInit() {
        console.log('finished.component cargado !! ');
    }
}
