import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';
@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html'
  
})
export class PersonajeComponent  {
  constructor(private dbzService:DbzService){}
  get personaje(){
    return this.dbzService.personajes
  }

}
