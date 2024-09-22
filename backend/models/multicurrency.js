// models/multicurrency.js

const currencyModel = {
    basecurrency: 'usd',   // Default base currency
    targetcurrency: '',    // Target currency (for conversion)
    exchangerate: 1.0,     // Exchange rate
    amountinbase: 0,       // Amount in base currency
    amountintarget: 0,     // Calculated amount in target currency
};

const convertCurrency = (data) => {
    return {
        ...currencyModel,
        ...data,
        amountintarget: data.amountinbase * data.exchangerate,
    };
};

module.exports = {
    currencyModel,
    convertCurrency,
};
