class Reptil extends Animal {
    private tipo_escama: string;

    constructor(_tipo_escama: string,
        _nome: string,
        _idade: number,
        _genero: string) {
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