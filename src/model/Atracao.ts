import { Habitat } from "./habitat";

export class Atracao {
    private nome: string; // * Atributo privado para armazenar o nome da atração
    private lista_de_habitat: Array <Habitat>; // * Atributo privado para armazenar a lista de habitats da atração

     /**
     * Construtor da classe Atracao.
     * 
     * @param _nome O nome da atração.
     * @param _listaHabitats A lista de habitats na atração.
     */

    constructor(
        _nome: string,
        _lista_de_habitat: Array <Habitat>,) {
        this.nome = _nome;
        this.lista_de_habitat = _lista_de_habitat;
    }
     /**
     * Método para obter o nome da atração.
     * 
     * @returns O nome da atração.
     */
    public getLista_habitat(): Array<Habitat> {
        return this.lista_de_habitat;
    } 
     /**
     * Método para definir a lista de habitats na atração.
     * 
     * @param listaHabitats A lista de habitats a ser definida para a atração.
     */
    public setLista_habitat(lista_de_habitat: Array<Habitat>): void {
        this.lista_de_habitat = lista_de_habitat;
    }
    
    public getNome(): string {
        return this.nome;
    }
     /**
     * Método para definir o nome da atração.
     * 
     * @param nome O nome a ser definido para a atração.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }
     /**
     * Método para obter a lista de habitats na atração.
     * 
     * @returns A lista de habitats na atração.
     */

}

