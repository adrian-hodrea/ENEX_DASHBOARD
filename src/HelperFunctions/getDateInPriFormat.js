import datesData from '../Components/data/datesData';

const getDateInPriFormat = (date) => {
    for (let property in datesData) {
        if (property === date) {
            return datesData[property]
        }
    } 
}

export default getDateInPriFormat;