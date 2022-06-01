import { Component} from '@angular/core';
import { Form } from '@angular/forms';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';
 

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
/*en la funcion agregar se reseviria event:any y dentro se usaria event.preventDefault */
export class MainPageComponent {
  nuevo:Personaje={
    nombre:'roshi',
    poder:1000

  }

  constructor(){
    
  }
}
