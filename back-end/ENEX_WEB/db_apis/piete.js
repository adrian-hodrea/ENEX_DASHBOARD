const database = require('../services/database.js');
const query =
`select 
	enex$adi_piete.adi_piata "piata_id",
	enex$adi_piete.adi_ord "piata_ord",
	enex$adi_piete.adi_piatades "adi_piatades"
from 
	enex$adi_piete
where 
	enex$adi_piete.adi_piata > 0
order by 
	enex$adi_piete.adi_ord
`
;

async function get() {
	console.log("Am ajuns la DB API pt piete");
	const result = await database.simpleExecute(query,{}); 
 	return result.rows;
}
 
module.exports.get = get;

