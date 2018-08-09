import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'main-email',
  template: `
  
  <div class="panel panel-default">
    <h1>{{title}}</h1>
    <hr/>
    <guardar-email></guardar-email>
    <mostrar-email></mostrar-email>
  </div>
   `,
})
export class MainEmailComponent implements OnInit{
  title = 'Modulo Email';

  ngOnInit() {
    console.log('main-email.component cargado !! ');
}
}