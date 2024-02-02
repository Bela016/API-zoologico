import { Animal } from "./Animal";

export class Habitat {
    private name: string;
    private lista_de_animais:Animal;

    constructor(
        _nome: string,
        _lista_de_animais: Animal,) {
        this.name = _nome;
        this.lista_de_animais = _lista_de_animais;
    }
    public getLista_animais(): Animal {
        return this.lista_de_animais;
    }
    public setLista_animais(lista_de_animais: Animal): void {
        this.lista_de_animais = lista_de_animais;
    }
    public getNome(): string {
        return this.name;
    }
    public setNome(name:string): void {
        this.name = name;
    }




}

