import { Habitat } from "./habitat";

export class Atracao {
    private nome: string;
    private lista_de_habitat: Array <Habitat>;

    constructor(
        _nome: string,
        _lista_de_habitat: Array <Habitat>,) {
        this.nome = _nome;
        this.lista_de_habitat = _lista_de_habitat;
    }
    public getLista_habitat(): Array<Habitat> {
        return this.lista_de_habitat;
    } 
    // define a lista de de habitat
    //@param _lista_de_animais a ser atribuida
    public setLista_habitat(lista_de_habitat: Array<Habitat>): void {
        this.lista_de_habitat = lista_de_habitat;
    }
    // retorna o nome do habitat
    // @returns o nome do habitat 
    public getNome(): string {
        return this.nome;
    }
    public setNome(nome: string): void {
        this.nome = nome;
    }

}

