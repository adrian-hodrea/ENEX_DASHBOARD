const ch_indir = require('../db_apis/ch_indir.js');

async function get(req, res, next) {
  try {
    const context = 
	{
		fromDate: req.body.fromDate,
		toDate: req.body.toDate
	};
    const rows = await ch_indir.get(context);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.status(200).json(rows);
  } 
  catch (err) {
    next(err);
  }
}
 
module.exports.get = get;