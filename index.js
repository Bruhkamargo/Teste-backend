const cors = require("cors");
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const users = []

/**
 * Verifica a conexão
 */
app.get('/', (req, res) => {
    return res.json('Hello Word!');
});

/**
 * Retorna os "usuarios"
 */
app.get('/users', (req, res) => {
    return res.json(users);
})

app.post('/users', (req, res) => {
    const { Peso, Altura } = req.body;
    let Calc = (Peso /((Altura / 100) **2))
    const NewUser = {
        id: Math.random().toString(36).substring(7),
        Peso: Peso,
        Altura: Altura,
        Result: Calc
    }
    users.push(NewUser);

    return res.json(NewUser);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
