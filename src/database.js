const mongoose = require('mongoose');
const URI = 'mongodb://root:root123@ds117749.mlab.com:17749/meubanco';

mongoose.connect(URI)
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;
