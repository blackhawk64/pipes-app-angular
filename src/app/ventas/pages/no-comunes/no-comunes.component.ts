import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  nombre: string = 'Alexis';
  genero: string = 'H';
  generoMap: any = { H: 'invitarlo', M: 'invitarla' };

  colaboradores: string[] = ['Lorena', 'Luis', 'César', 'Paula', 'Paz'];
  colaboradoresMap: any = {
    '=0': 'ningun colaborador confirmado',
    '=1': 'un colaborador confirmado',
    other: '# colaboradores confirmados',
  };

  programador = {
    nombre: 'Alexis',
    edad: '26',
    stack: 'C#'
  };

  cambiarDestinatario() {
    this.nombre = 'Laura';
    this.genero = 'M';
  }

  eliminarInvitado() {
    this.colaboradores.pop();
  }

  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hay datos en la promesa");
    }, 3500);
  });
}
