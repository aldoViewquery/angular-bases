import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  })
export class ListadoComponent  {
  heroes:string[]=['SpiderMan','BatMan','Holk','IronMan'];
  borrarHeroes:string ='';
  BorrarHeroe(){
      this.borrarHeroes = this.heroes.shift() || '';
  }
}
