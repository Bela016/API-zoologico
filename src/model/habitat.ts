import { Animal } from "./Animal";

/**
     * Representa o nome do habitat.
     */
export class Habitat {
    private name: string;
    /**
     * Lista de animais presentes no habitat.
     */
    private lista_de_animais: Array<Animal>;

    constructor(
        _nome: string,
        _lista_de_animais: Array<Animal>,) {
            /**
     * Inicializa o nome e a lista de animais do habitat com os valores fornecidos.
     */
        this.name = _nome;
        this.lista_de_animais = _lista_de_animais;
    }
    /**
     * Retorna a lista de animais presentes no habitat.
     * 
     * @returns A lista de animais.
     */
    public getLista_animais(): Array<Animal> {
        return this.lista_de_animais;
    }
    /**
     *  define a lista de animais do habitat
    @param _lista_de_animais a ser atribuida
*/
    public setLista_animais(lista_de_animais: Array<Animal>): void {
        this.lista_de_animais = lista_de_animais;
    }
    /**
     *  retorna o nome do habitat
     @returns o nome do habitat
*/


    public getNome(): string {
        return this.name;
    }
    public setNome(name: string): void {
        this.name = name;
    }




}

