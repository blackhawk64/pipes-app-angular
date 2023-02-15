export enum Color {
    rojo, negro, azul, verde
}

export enum FormaOrdenar {
    nombre, vuela, color
}

export interface Heroe {
    nombre: string;
    vuela: boolean;
    color: Color;
}