import { Component,Input, Output } from "@angular/core";
import { Form } from "@angular/forms";
import { Personaje } from '../interfaces/dbz.interface';
import { EventEmitter } from "@angular/core";
import { DbzService } from "../services/dbz.service";

@Component({
    selector:"app-agregar",
    templateUrl:"./agregar.component.html"
})

export class AgregarComponent{
constructor(private dbzservice:DbzService){

}
      @Input() nuevo: Personaje={
        nombre:'',
        poder :0
      }
   //   @Output() onNewPersonajeDbz: EventEmitter<Personaje> = new EventEmitter();
    
       agregar(){
        if(this.nuevo.nombre.trim().length===0){return console.log("vacio");}
       // this.onNewPersonajeDbz.emit(this.nuevo);
       this.dbzservice.agregarpersonaje(this.nuevo);
        this.nuevo={
          nombre:'',
          poder :0
        };
      }
}