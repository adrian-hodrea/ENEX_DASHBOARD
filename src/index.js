import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import kpiDisplayData from './Components/data/kpiDisplayData.js';

const host = "http://192.168.0.4:3000";
const apiTreni = host + '/api/treni';
const apiPiete = host + '/api/piete';
const apiTipTranzactii = host + '/api/tip_tranzactii';

(async function() {
    const parseBody = data => {
        return data.json();
    }
    /* Aduc datele referitoare la tranzactii */
    let responseObject = await fetch(apiTreni,
        {method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
        })

    const treniData = await parseBody(responseObject);
    /* Aduc nomenclatorul de piete*/
    responseObject = await fetch(apiPiete,
        {method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
        })
    const piete = await parseBody(responseObject);
    /* Aduc nomenclatorul de tipuri tranzactii*/
    responseObject = await fetch(apiTipTranzactii,
        {method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
        })
    const tipuriTranzactii = await parseBody(responseObject);
    /* Merg mai departe cu costructia paginii */
    const pieteComponents = prepareDataForEnergyInputComponent(treniData,piete,tipuriTranzactii); 

    ReactDOM.render(<App globalData={pieteComponents} />, document.getElementById('root'));
})();

const prepareDataForEnergyInputComponent = (bodyData,piete,tipuriTranzactii) => {
    /* Parcurg toate tipurile de piete si pentru fiecare 
    tip de piata iau fiecare tip de tranzactie si apoi populez datele de afisat */
    let pieteComponents = [];
    piete.forEach( piata => {
        let pieteData = {
            sourceTitle: `Intrari ${piata.adi_piatades}`,
            kpis: []
        };
        let kpisTotal = {
            title: `Total ${piata.adi_piatades}`,
            cantitate: 0,
            valoare: 0,
            costMediu: 0
        }
        /* import icon + backgroundColor from centralised module*/
        kpiDisplayData.forEach(kpiDD => {
            if (kpiDD.id === 999) {
                kpisTotal.icon = kpiDD.icon;
                kpisTotal.backgroundColor = kpiDD.backgroundColor;
            }
        })

        tipuriTranzactii.forEach( tipTr => {
            let kpi = {
                title: `Cantitati ${tipTr.adi_tiptr_des}`,
                cantitate: 0,
                valoare: 0,
                costMediu: 0
            }

            /* iau datele din tranzactii, daca exista 
            pentru combinatia PIATA + TIP TRANZACTIE */
            bodyData.forEach(trData => {
                if (trData.piata_id === piata.piata_id &&
                    trData.tip_tranzactie_id === tipTr.tip_tranzactie_id) {
                        kpi.cantitate = trData.cantitate;
                        kpi.valoare = trData.valoare;
                        kpi.costMediu = kpi.valoare / kpi.cantitate;
                        kpisTotal.cantitate = kpisTotal.cantitate + trData.cantitate;
                        kpisTotal.valoare = kpisTotal.valoare + trData.valoare;
                    }
                
            }) 
            /* import icon + backgroundColor from centralised module*/
            kpiDisplayData.forEach(kpiDD => {
                if (kpiDD.id === tipTr.tip_tranzactie_id) {
                    kpi.icon = kpiDD.icon;
                    kpi.backgroundColor = kpiDD.backgroundColor;
                }
            })

            pieteData.kpis.push(kpi);
        }) // end of tipuriTranzactii.forEach
        kpisTotal.costMediu = kpisTotal.valoare / kpisTotal.cantitate;
        pieteData.kpis.push(kpisTotal);
        pieteComponents.push(pieteData);
    }) // end of piete.forEach

 let pieteDataTotals = {
    sourceTitle: `Intrari TOTALE`,
}
//pieteDataTotals.kpis = new Array(...pieteComponents[0].kpis);
pieteDataTotals.kpis = pieteComponents[0].kpis.map( k => {
    let obj = {...k};
    return obj;
})

pieteDataTotals.kpis.forEach( kpiTotal => {
    pieteComponents.forEach( (comp,index) => {
        if (index > 0) {
            comp.kpis.forEach(kpiTip => {
                if (kpiTotal.title === kpiTip.title) {
                    console.log("kpiTotal.cantitate + kpiTip.cantitate: ", kpiTotal.cantitate + kpiTip.cantitate); 
                    kpiTotal.cantitate = kpiTotal.cantitate + kpiTip.cantitate;
                    kpiTotal.valoare = kpiTotal.valoare + kpiTip.valoare; 
                    console.log("kpiTotal.cantitate: ", kpiTotal.cantitate); 
                    console.log("kpiTip.cantitate: ", kpiTip.cantitate); 
                }
            })
        }
    })
}
)

console.log("pieteDataTotals:", pieteDataTotals);


pieteComponents.push(pieteDataTotals);
console.log("pieteComponents", pieteComponents);

 return pieteComponents;
}



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


/*
fetch(api,
{method: "GET",
headers: {
    "Content-Type": "application/json"
}
})
.then( responseObject => responseObject.json())
.then( (bodyData) => {
    prepareDataForEnergyInputComponent(bodyData);
    ReactDOM.render(<App />, document.getElementById('root'));
}

); // end of second then
*/
