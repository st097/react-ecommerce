const express = require('express');
const { LocalStorage } = require('node-localstorage');
localStorage = new LocalStorage('./scratch')
const initial_products = require('../api/initalData/products');
const initial_categories = require('../api/initalData/categories'); //added this 21.3
const initial_subCategories = require('../api/initalData/subCategories')
const LS = require('./helpers/localStorage');


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port = 5000;

// this is important to disable cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

let products = LS.all('products');

let categories = LS.all('categories');

let subCategories = LS.all('subCategories');


console.log(`produktet ne local storage ne momentin qe serveri ndizet: ${products.length}`);

console.log(`kategorite ne local storage ne momentin qe serveri ndizet: ${categories.length}`); //added G
console.log(`sub Categories ne local storage ne momentin qe serveri ndizet: ${subCategories.length}`); //added G

if (products.length == 0) {
  LS.addALL('products', initial_products);
}
if (categories.length == 0) {
  LS.addALL('categories', initial_categories);
}
if (subCategories.length == 0) {
  LS.addALL('categories', initial_subCategories);
}

app.get('/api/products', (req, res) => {
  console.log(req.query);
//added
  // if(req.query.cat_id) {
  //   res.json({
  //     "status": "success",
  //     "data": LS.getProductsBySubCat('products', req.query.cat_id)
  //   })
  // }

  res.json({
    "status": "success",
    "data": LS.all('products')
  })
});
//added categories
// app.get('/api/categories/:subCatId', (req, res) => {
//   res.json({
//     "status": "success",
//     "data": LS.getProductsBySubCat('products', req.params.subCatId)
//   })
// });
app.get('/api/products/:subCatId', (req, res) => {
  res.json({
    "status": "success",
    "data": LS.getProductsBySubCat('products', req.params.subCatId)
  })
});
app.get('/api/products/:id', (req, res) => {
// res.json({
//   'hello': 'grejs'
// })
  res.json({
    "status": "success",
    "data": LS.find('products', req.params.productId)
  })
})

app.post('/api/products', (req, res) => {
  const created_product = LS.create('products', req.body);
  res.json({
    "status": "success",
    "data": created_product
  })
})

app.get('/api/categories', (req, res) => {
  res.json({
    "status": "success",
    "data": LS.all('categories')
  })
})

app.post('/api/categories', (req, res) => {
  const created = LS.create('categories', req.body);
  res.json({
    "status": "success",
    "data": created
  })
})

app.get('/api/subCategories', (req, res) => {
  res.json({
    "status": "success",
    "data": LS.all('subCategories')
  })
})

app.post('/api/subCategories', (req, res) => {
  const created = LS.create('subCategories', req.body);
  res.json({
    "status": "success",
    "data": created
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})