import { Component } from '@angular/core';
import { Color, FormaOrdenar, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {
  cambiarMayusculas: boolean = false;

  FormaOrdenar = FormaOrdenar;
  OrdenarPor: number = -1;

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }
  ];
  
  toggleMayusculas() {
    this.cambiarMayusculas = !this.cambiarMayusculas;
  }

  cambiarOrden(valor: number) {
    this.OrdenarPor = valor;
  }
}
