import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto004';
  valor1!:number;
  valor2!:number;
  valor3!:number;
  resultado = ""; //Aqui volcamos el resultado del dado
  constructor() {
    this.lanzarDados();
  }

  generarAleatorio() {
    return Math.floor(Math.random()*6)+1;
  }

  lanzarDados() {
    this.valor1 = this.generarAleatorio();
    this.valor2 = this.generarAleatorio();
    this.valor3 = this.generarAleatorio();
    this.comprobarResultadoJuego();
  }

  comprobarResultadoJuego() {
    if((this.valor1 == this.valor2) && (this.valor1 == this.valor3)) {
      this.resultado = "Has ganado";
    } else {
      this.resultado = "Has perdido";
    }
  }
}