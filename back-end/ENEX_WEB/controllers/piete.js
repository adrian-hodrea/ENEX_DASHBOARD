const piete = require('../db_apis/piete.js');

async function get(req, res, next) {
  try {
    const rows = await piete.get();
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.status(200).json(rows);
  } 
  catch (err) {
    next(err);
  }
}
 
module.exports.get = get;