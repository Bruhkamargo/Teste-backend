const cors = require("cors");
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const users = [
    ["Nome", 18, true],
    ["Nome", 11, false],
    ["Nome", 46, true],
]

app.get('/', (req, res) => {
    return res.json('Hello Word!');
});

app.get('/users', (req, res) => {
    return res.json(users[0]);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
