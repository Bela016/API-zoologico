import { Animal } from "./Animal";

export class Habitat {
    private name: string;
    private lista_de_animais: Array<Animal>;

    constructor(
        _nome: string,
        _lista_de_animais: Array<Animal>,) {
        this.name = _nome;
        this.lista_de_animais = _lista_de_animais;
    }
    public getLista_animais(): Array<Animal> {
        return this.lista_de_animais;
    }
    // define a lista de animais do habitat
    //@param _lista_de_animais a ser atribuida
    public setLista_animais(lista_de_animais: Array<Animal>): void {
        this.lista_de_animais = lista_de_animais;
    }
    // retorna o nome do habitat
    // @returns o nome do habitat 
    public getNome(): string {
        return this.name;
    }
    public setNome(name: string): void {
        this.name = name;
    }




}

