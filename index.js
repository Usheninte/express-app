import express from 'express';
import data from './data/data.json';

const app = express();
const PORT = 3000;

// this is for the pblic folder on path "/"
app.use(express.static('public'));

// this is for the images folder on path "images"
app.use('/images', express.static('images'));

app.get('/', (req, res) => 
    // get data first
    res.json(data)
)

app.post('/newItem', (req, res) => 
    res.send(`a post resquest with /newItem route on port ${PORT}`)
);

app.put('/item', (req, res) => 
    res.send(`a put resquest with /item route on port ${PORT}`)
);

app.delete('/item', (req, res) => 
    res.send(`a delete resquest with /item route on port ${PORT}`)
);

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
    console.log(data);
});