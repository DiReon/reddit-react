import express from 'express';
import {Header} from "../shared/Header";
import ReactDOM from 'react-dom/server';
import {indexTemplate} from "./indexTemplate";
const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/', (req, res) => {
    res.send(
        indexTemplate(ReactDOM.renderToString(Header()))
    );
})

app.listen(3000, () => {
    console.log('Server started on localhost:3000');
})
