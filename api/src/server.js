const API_METHODS = require('./methods/api-methods');
const koa = require('koa');
const router = require('koa-router');
const mount = require('koa-mount');

const app = koa();
const API = new router();

API.get('/hey', API_METHODS.hey);
API.get('/girl', API_METHODS.girl);

app.use(mount('/v1', API.middleware()));
if (!module.parent) app.listen(3000);

console.log('API running on http://localhost:3000/.\n“If you’re a bird, I’m a bird.”\n\t-Ryan Gosling, The Notebook');
