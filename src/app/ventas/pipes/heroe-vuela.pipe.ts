import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'heroeVuela'
})
export class HeroeVuelaPipe implements PipeTransform {
    transform(vuela: boolean): string {
        return vuela ? "si vuela" : "no vuela";
    }

}