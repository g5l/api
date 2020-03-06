module.exports = (app, db) => {
  app.get('/products', (req, res) => {
    db.Product.findAll({ where: { status: 'active' } })
      .then( (result) => res.json(result) )
  });

  app.get('/product/:id', (req, res) => {
    const { id } = req.params;
    
    db.Product.findOne({ where: { id } })
      .then( (result) => res.json(result) )
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

  app.put('/product', (req, res) => {
    const { id, name, description, image } = req.body;

    db.Product.update({ name, image, description }, { where: { id } })
      .then( (result) => res.json(result) )
  })
  
  app.delete('/product', (req, res) => {
    const { id } = req.body;
    console.log({id});
    const status = 'inactive';

    db.Product.update({ status }, { where: { id } })
      .then( (result) => res.json(result) )
  })
}