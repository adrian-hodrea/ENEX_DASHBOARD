const database = require('../services/database.js');
const query =
`select 
	sum(enex$transorder.tquant/1000) "cantitate",
	sum(enex$transorder.cost) "valoare",
	enex$adi_piete.adi_piata "piata_id",
	enex$adi_tip_tranzactie.adi_tiptr "tip_tranzactie_id"
from 
	enex$transorder, enex$doctypes, enex$costcenters, enex$adi_piete, enex$adi_tip_tranzactie
where 
	enex$transorder.type = enex$doctypes.type
	and enex$transorder.wiz_costc5 = enex$costcenters.costc
	and enex$costcenters.adi_detpiata = enex$adi_piete.adi_piata
	and enex$costcenters.adi_tiptr = enex$adi_tip_tranzactie.adi_tiptr
	and enex$doctypes.inouttype = :i
	and enex$transorder.wiz_costc5 <> 0
	and (enex$transorder.curdate between :fromDate and :toDate)
group by 
	enex$adi_piete.adi_piata, 
	enex$adi_tip_tranzactie.adi_tiptr
`
;

async function get(context) {
  const binds = {};
  binds.i = 'I';
  binds.fromDate = context.fromDate;
  binds.toDate = context.toDate;	
  const result = await database.simpleExecute(query, binds);
  return result.rows;
}
 
module.exports.get = get;
