import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    template:` 
        <h1>UN INCREMENTADOR</h1>
        <button (click)="acomular(base)">+5</button>
        <span>
        {{numero2}}
        </span>
        <button (click)="acomular(-base)">-5</button>
    `
})
export class contadorComponent{
    base:number=5;
    numero2:number=0;
    acomular(valor:number){
      this.numero2 += valor;
    }  
}