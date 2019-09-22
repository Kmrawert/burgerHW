// console.log('this is loaded');
require('dotenv').config();
exports.mySQL = {
    secret: process.env.SECRET
  };