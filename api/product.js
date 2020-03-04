module.exports = (app, db) => {
  app.get('/products', (req, res) => {
    db.Product.findAll().then( (result) => res.json(result) )
  });

  app.post('/product', (req, res) => {
    const { name, description } = req.body;
    const { image } = req.files;
    const imagePath = `/assets/products/${image.name}`

    image.mv(`./public/assets/products/${image.name}`);

    db.Product.create({
      name: name,
      image: imagePath,
      description: description
    }).then( (result) => res.json(result) )
  });
}