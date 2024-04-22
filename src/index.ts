import express from 'express';
import cors from 'cors';
import intensRouter from './routes/itens-routes';

const PORT = 3000;
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors({
  origin: '*'
}))

app.get('/', (req, res) => {
    res.send('Hello World');
})


app.use('/api', intensRouter);

app.use((req, res) => {
    res.status(404).send('Not found');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});