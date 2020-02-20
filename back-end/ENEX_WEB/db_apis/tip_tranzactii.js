const database = require('../services/database.js');
const query=
`select 
	enex$adi_tip_tranzactie.adi_tiptr "tip_tranzactie_id",
	enex$adi_tip_tranzactie.adi_ord "tip_tranzactie_ord",
	enex$adi_tip_tranzactie.adi_tiptr_des "adi_tiptr_des"
from
	enex$adi_tip_tranzactie
where
	enex$adi_tip_tranzactie.adi_tiptr > 0
order by
	enex$adi_tip_tranzactie.adi_ord
`
;

async function get() {
	const result = await database.simpleExecute(query); 
        return result.rows;
}
 
module.exports.get = get;

