import { Animal } from "./Animal";

export class Reptil extends Animal {
    private tipo_escama: string;

    constructor(
        _nome: string,
        _idade: number,
        _genero: string,
        _tipo_escama: string) {
        super(_nome, _idade, _genero);
        this.tipo_escama = _tipo_escama;
    }

    public getTipoEscama(): string {
        return this.tipo_escama;
    }
    public setTipoEscama(tipo_escama: string): void {
        this.tipo_escama = tipo_escama;
    }
}