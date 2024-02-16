import express from 'express';
import cors from 'cors';
import { Ave } from './model/Ave';
import { Reptil } from './model/Reptil';
import { Mamifero } from './model/Mamifero';
import { Habitat } from './model/habitat';
import { Atracao } from './model/Atracao';
import { Zoologico } from './model/Zoologico';

const port = 3000;
const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    let ave: Ave = new Ave('Papagaio', 30, 'masculino', 12);
    let reptil: Reptil = new Reptil('lagarto', 2, 'femea', 'cicloides');
    let mamifero: Mamifero = new Mamifero('doberman', 'cachorro', 102, 'femea');
    res.json([ave, reptil, mamifero]);
    //res.json('olá mundo!');
})


server.listen(port, () => {
    console.log(`servidor está escutando no endereço http://localhost:${port}`)
})

server.post('/Aves', (req, res) => {
    const { nome, idade, genero, envergadura } = req.body;
    const NvAve = new Ave(nome, idade, genero, envergadura);
    res.json(NvAve);
})

server.post('/habitat', (req, res) => {
    const {nome, animais} = req.body;
    const habitat = new Habitat(nome, animais);
    console.log(habitat);
    res.status(200).json('habitat criado');
});

server.post('/atracao', (req, res)=>{
    const {nome,habitat} = req.body;
    const atracao = new Atracao(nome, habitat);
    console.log(atracao);
    res.status(200).json('atração criada');

});

server.post('/zologico', (req, res)=>{
    const {nome,atracao} = req.body;
    const zoologico = new Zoologico(nome, atracao);
    console.log(zoologico);
    res.status(200).json('zoologico criado');

});