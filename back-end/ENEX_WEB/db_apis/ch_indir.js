const database = require('../services/database.js');
const query =
`select 
	sum(fi.debit1 - fi.credit1) "suma_indir"
from 
	enex$fncitems fi, enex$accounts a, enex$accounts ia, enex$costcenters cc, enex$fncitemsb fib
where 
	(a.accname like '6%' and ia.accname not like '121%')
	and fi.stornoflag <> 'Y'
	and fi.gl <> -3
	and fi.final = 'Y'
	and cc.adi_ip = 'Y'
	and fi.account = a.account
	and fi.iaccount = ia.account
	and fi.fnctrans = fib.fnctrans
	and fi.kline = fib.kline
	and fib.costc2 = cc.costc
	and (fi.baldate between :fromDate and :toDate)
`
;

async function get(context) {
	console.log("Am ajuns la DB API pt chindir");
	const binds = {};
        binds.fromDate = context.fromDate;
        binds.toDate = context.toDate;
	const result = await database.simpleExecute(query,binds); 
 	return result.rows[0];
}
 
module.exports.get = get;
