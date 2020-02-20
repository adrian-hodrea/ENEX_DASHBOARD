const path = require('path');

async function get(req, res, next) {
  try {
      // res.status(200).json("Root of EnexAPI reached");
      res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
  } 
	catch (err) {
    next(err);
  }
}
 
module.exports.get = get;