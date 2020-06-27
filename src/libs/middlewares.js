import helmet from 'helmet';
import bodyParser from 'body-parser';
import express from 'express';
import compression from 'compression';
import cors from 'cors';

module.exports = app => {
  app.use(helmet());
  app.use(cors());
  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });
  app.disable('etag');
  app.disable('x-powered-by');
  app.use(compression());
  app.use(express.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
};
