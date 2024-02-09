import { Animal } from "./Animal";

export class Reptil extends Animal {
    /**
     * Representa o tipo de escama do réptil.
     * @type {string}
     */
    private tipo_escama: string;
/**
     * Cria uma nova instância de Réptil.
     * @param {string} _nome - O nome do réptil.
     * @param {number} _idade - A idade do réptil.
     * @param {string} _genero - O gênero do réptil.
     * @param {string} _tipo_escama - O tipo de escama do réptil.
     */
    constructor(
        _nome: string,
        _idade: number,
        _genero: string,
        _tipo_escama: string) {
        super(_nome, _idade, _genero);
        this.tipo_escama = _tipo_escama;
    }
    /**
     * Obtém o tipo de escama do réptil.
     * @returns {string} - O tipo de escama do réptil.
     */

    public getTipoEscama(): string {
        return this.tipo_escama;
    }
    /**
     * Define o tipo de escama do réptil.
     * @param {string} tipo_escama - O novo tipo de escama do réptil.
     */
    public setTipoEscama(tipo_escama: string): void {
        this.tipo_escama = tipo_escama;
    }
}