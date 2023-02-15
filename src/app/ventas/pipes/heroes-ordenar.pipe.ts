import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'heroesOrdenar'
})
export class HeroesOrdenarPipe implements PipeTransform {

  transform([...heroes]: Heroe[], ordenarPor: number = -1): Heroe[] {
    switch (ordenarPor) {
      case 0://Por nombre
        return heroes.sort((a, b) => a.nombre > b.nombre ? 1 : -1); 
      case 1:// Si vuela o no
        return heroes.sort((a, b) => a.vuela > b.vuela ? 1 : -1);
      case 2:// Por color
        return heroes.sort((a, b) => a.color > b.color ? 1 : -1);
    
      default:
        return heroes;
    }
  }

}
