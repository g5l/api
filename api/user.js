const passport = require('passport');
const jwt = require('jsonwebtoken');

let jwtOptions = {
  secretOrKey: 'wuwwuvw'
};

module.exports = (app, db) => {
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send(
        'Request missing username or password param'
      );
    }

    const user = await db.User.findOne({ where: { email } });

    if (!user) {
      res.status(401).json({ msg: 'No such user found', user });
    }

    if (user.password === password) {
      let payload = { id: user.id };
      let token = jwt.sign(payload, jwtOptions.secretOrKey);
      res.json({ msg: 'ok', token: token });
    } else {
      res.status(401).json({ msg: 'Password is incorrect' });
    }
  });

  app.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
      msg: 'Congrats! You are seeing this because you are authorized'
    });
  });
}