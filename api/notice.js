module.exports = (app, db) => {
  app.get('/notices', (req, res) => {
    db.Notice.findAll({ where: { status: 'active' } })
      .then( (result) => res.json(result) )
  });

  app.get('/categories', (req, res) => {
    db.NoticeCategory.findAll()
      .then( (result) => res.json(result) )
  });

  app.post('/notice', (req, res) => {
    const { title, article, noticeCategoryId, source } = req.body;
    const { image } = req.files;
    const imagePath = `/assets/blog/${image.name}`;

    image.mv(`./public/assets/blog/${image.name}`);

    db.Notice.create({
      title: title,
      image: imagePath,
      article: article,
      notice_category_id: noticeCategoryId,
      source: source
    }).then( (result) => res.json(result) )
  });
}