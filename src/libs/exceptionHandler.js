import 'express-async-errors';
import Youch from 'youch';

module.exports = app => {
  app.use(async (err, req, res, next) => {
    if (process.env.NODE_ENV === 'development') {
      const errors = await new Youch(err, req).toJSON();

      return res.status(500).json(errors);
    }

    return res.status(500).json({ message: 'Internal server error' });
  });
};
