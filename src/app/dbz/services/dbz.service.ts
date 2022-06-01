import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";
@Injectable()
export class DbzService{
   private _PersonajesDbz:Personaje[]=[
        {
          nombre:'kakaroto',
          poder :1000
        },
        {
          nombre:'vegeta',
          poder :800
        }
    ];
    get personajes():Personaje[]{
        return [...this._PersonajesDbz];
    }
    constructor(){
        console.log('servicio inicializado');
    }
    agregarpersonaje(Agregarpersonaje:Personaje){
      return this._PersonajesDbz.push(Agregarpersonaje);
    }
}