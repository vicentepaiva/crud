import express from 'express';



interface Item {
    id?: number;
    nome: string;
    preco: number;
    quantidade: number;
}

const intensRouter = express.Router();


intensRouter.post('/itens', (req, res) => {
let {nome, preco, quantidade} = req.body;

const item: Item = {
    nome: nome,
    preco: preco,
    quantidade: quantidade
}

item.id = 1;
item.nome = nome;
item.preco = preco;
item.quantidade = quantidade;
res.status(201).json(item);

if (!nome || !preco || !quantidade) {
    return res.status(400).send('Nome, preço e quantidade são obrigatórios');
  }

})

intensRouter.get('/itens', (req, res) => {
    const itens: Item[] = [
        {
            id: 1,
            nome: 'Mouse logitech',
            preco: 50,
            quantidade: 20
        },
        {
            id: 2,
            nome: 'teclado logitech',
            preco: 900,
            quantidade: 10
        }
    ]
    res.status(200).json(itens);
});

intensRouter.get('/itens/:id', (req, res) => {
    const id: number = +req.params.id;

    if(isNaN(id)){
        res.status(400).send('Parametro invalido');
        return false;
    }

    const item: Item = {
        id: id,
        nome: `produto ${id}`,
        preco: 50,
        quantidade: 10
    }
    res.status(200).json(item);
});

intensRouter.put('/itens/:id', (req, res) => {
    const id: number = +req.params.id;
    const item: Item = req.body;
    res.status(204).send();
});

intensRouter.delete('/itens/:id', (req, res) => {
    const id: number = +req.params.id;
    res.status(204).send();
});


export default intensRouter