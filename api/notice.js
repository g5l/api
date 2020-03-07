module.exports = (app, db) => {
  app.get('/notices', (req, res) => {
    db.Notice.findAll({ where: { status: 'active' } })
      .then( (result) => res.json(result) )
  });

  app.post('/notice', (req, res) => {
    const { title, article, date, categoryId } = req.body;
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