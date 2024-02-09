import { Animal } from "./Animal";

export class Ave extends Animal {
    /**
     * Representa a envergadura da ave.
     * @type {number}
     */
    private envergadura: number;
/**
     * Cria uma nova instância de Ave.
     * @param {string} _nome - O nome da ave.
     * @param {number} _idade - A idade da ave.
     * @param {string} _genero - O gênero da ave.
     * @param {number} _envergadura - A envergadura da ave.
     */
    constructor(
        _nome: string,
        _idade: number,
        _genero: string,
        _envergadura: number) {
        super(_nome, _idade, _genero);
        this.envergadura = _envergadura;
    }
    /**
     * Obtém a envergadura da ave.
     * @returns {number} - A envergadura da ave.
     */

    public getEnvergadura(): number {
        return this.envergadura;
    }
    /**
     * Define a envergadura da ave.
     * @param {number} envergadura - A nova envergadura da ave.
     */
    public setEnvergadura(envergadura: number): void {
        this.envergadura = envergadura;
    }
}