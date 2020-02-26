module.exports = (app, db) => {
  app.get('/products', (req, res) => {
    db.Product.findAll().then( (result) => res.json(result) )
  });

  app.post('/product', (req, res) => {
    const { name, image, description } = req.body;
    console.log({ name, image, description });

    console.log(req);

    // db.Product.create({
    //   name: req.body.name,
    //   image: req.body.image,
    //   description: req.body.description
    // }).then( (result) => res.json(result) )
  });
}