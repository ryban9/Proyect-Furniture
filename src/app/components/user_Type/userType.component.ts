import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'userType',
    templateUrl: './userType.component.html'
})
export class UserTypeComponent implements OnInit {
    title = 'UserType';
    ngOnInit() {
        console.log('userType.component cargado !! ');
    }
}
