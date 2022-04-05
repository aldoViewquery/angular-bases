import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent{
    nombre: string='IronMan';
    edad  :number = 45;
    /*
        los get son tratados como variables
        y no como funciones ni metodos ojo a si que cuando se llame
        solo se llamaran como variable
    */
    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }
    obtenerNombre():string{
        return `Nombre : ${this.nombre} - Edad: ${this.edad}`;
    }
    cambiarNombre():string{
        return  this.nombre = 'SpiderMan';  
    }
    cambiarEdad():number{
        return this.edad=35;
    }

}