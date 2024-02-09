import { Atracao } from "./Atração";


export class Zoologico {
    /**
     * Representa o nome do zoológico.
     * @type {string}
     */
    private nome: string;
    /**
     * Lista de atrações presentes no zoológico.
     * @type {Array<Atracao>}
     */
    private lista_de_atracao: Array <Atracao>;
    /**
     * Cria uma nova instância de Zoológico.
     * @param {string} _nome - O nome do zoológico.
     * @param {Array<Atracao>} _lista_de_atracao - A lista de atrações do zoológico.
     */

    constructor(
        _nome: string,
        _lista_de_atracao: Array <Atracao>,) {
        this.nome = _nome;
        this.lista_de_atracao = _lista_de_atracao;
    }
     /**
     * Obtém a lista de atrações do zoológico.
     * @returns {Array<Atracao>} - A lista de atrações do zoológico.
     */
    public getLista_Atracao(): Array<Atracao> {
        return this.lista_de_atracao;
    } 
   /**
     * Define a lista de atrações do zoológico.
     * @param {Array<Atracao>} lista_de_atracao - A nova lista de atrações do zoológico.
     */
    public setLista_Atracao(lista_de_atracao: Array<Atracao>): void {
        this.lista_de_atracao = lista_de_atracao;
    }
     /**
     * Obtém o nome do zoológico.
     * @returns {string} - O nome do zoológico.
     */
    public getNome(): string {
        return this.nome;
    }
    /**
     * Define o nome do zoológico.
     * @param {string} nome - O novo nome do zoológico.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }
}
