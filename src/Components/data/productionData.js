
let productionData = {
    sourceTitle: "Intrari din PRODUCTIA INTERNA",
    kpis: [
        {
            title: "Cantitati ferme",
            icon: "fas fa-grip-lines",
            cantitate: 0,
            valoare: 0,
            backgroundColor: "var(--cant-ferme-color-from), var(--cant-ferme-color-to)",
            displayType: "B" 
        },
        {
            title: "Cantitati variabile",
            icon: "fas fa-wave-square",
            cantitate: "1,012.01",
            valoare: "266,539.36",
            backgroundColor: "var(--cant-variabile-color-from), var(--cant-variabile-color-to)",
            displayType: "F"
        },
        {
            title: "Cantitati trading",
            icon: "fas fa-handshake",
            cantitate: 0,
            valoare: 0,
            backgroundColor: "var(--cant-trading-color-from), var(--cant-trading-color-to)",
            displayType: "B" 
        },
        {
            title: "Cantitati echilibrare",
            icon: "fas fa-balance-scale",
            cantitate: 0,
            valoare: 0,
            backgroundColor: "var(--cant-echilibrare-color-from), var(--cant-echilibrare-color-to)",
            displayType: "B"
        },
        {
            title: "Total productia interna",
            icon: "fas fa-plus",
            cantitate: "6113.30",
            valoare: "1,553,005.79",
            backgroundColor: "var(--cant-totale-color-from), var(--cant-totale-color-to)",
            displayType: "F" 
        }
    ]
}


export default productionData;