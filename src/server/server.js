import express from 'express';
import ReactDOM from 'react-dom/server';
import {indexTemplate} from "./indexTemplate";
import {App} from "../App";
import axios from "axios";

const app = express();

const PORT = process.env.PORT || 3000;
const REDIRECT_URL = (process.env.NODE_ENV === 'development') ? 'http://localhost:3000/auth' : 'https://reddit-react-go.herokuapp.com/auth';
const SECRET = 'yM4wZWGc-5y44rEIg2g28TlgFZkTZA';
const CLIENT_ID = '14Y3EmYWT78xTmjZrj9LSw';
app.use('/static', express.static('./dist/client'));

app.get('/auth', (req, res) => {
  console.log('Request', req);
  console.log('Response', res);
  axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=https://reddit-react-go.herokuapp.com/auth`,
    {
      auth: {username: CLIENT_ID, password: SECRET},
      headers: {'Content-type': 'application/x-www-form-urlencoded'}
    }
  )
    .then(({data}) => {
      console.log('authorization data: ', data);
      res.send(
        indexTemplate(ReactDOM.renderToString(App()), data['access_token'])
      );
    })
    .catch(console.log);
})

app.get('*', (req, res) => {
  res.send(
    indexTemplate(ReactDOM.renderToString(App()))
  );
})

app.listen(PORT, () => {
  console.log(`Server started on localhost:${PORT}`);
  console.log('SECRET: ', SECRET);
  console.log('Client_ID: ', CLIENT_ID);
})
