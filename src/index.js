import 'dotenv/config';
import express from 'express';
import 'express-async-errors';
import consign from 'consign';

const path = require('path');

const app = express();
consign({ cwd: path.join(__dirname) })
  .include('libs/middlewares.js')
  .then('routes')
  .then('libs/exceptionHandler.js')
  .then('libs/boot.js')
  .into(app);
