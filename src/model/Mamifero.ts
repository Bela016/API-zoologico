import { Animal } from "./Animal";

export class Mamifero extends Animal {
     /**
     * Representa a raça do mamífero.
     */
    private raca: string;

    constructor(_raca: string,
        _nome: string,
        _idade: number,
        _genero: string)
         /**
     * Chama o construtor da classe Animal para inicializar o nome, idade e gênero do mamífero.
     */ {
        super(_nome, _idade, _genero);
        /**Inicializa a raça do mamífero com o valor fornecido */ 
        this.raca = _raca;
        
    }
    /**
     * Retorna a raça do mamífero.
     * 
     * @returns A raça do mamífero.
     */
    public getRaca(): string {
        return this.raca;
    }
    /**
     * Define a raça do mamífero.
     * 
     * @param raca A nova raça do mamífero.
     */
    public setRaca(raca: string): void {
        this.raca = raca;
    }
}