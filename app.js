// class exchangeRate {
//     static baseApiUrl = "https://api.exchangerate-api.com/v4/latest/";

//     static async gateRate(cur1 = "usd", cur2 = "bdt") {

//         const apiUrl = exchangeRate.apiUrl + cur1;
//         const response = await fetch(apiUrl);
//         console/log(response)
//         const data = await response.json();
//     }

// }

// const rate = exchangeRate.gateRate();
// console.log(rate);

class ExchangeRate {
    static baseApiUrl = "https://api.exchangerate-api.com/v4/latest/"
    static async getRate(c1 = 'usd', c2 = 'bdt') {
        const apiUrl = ExchangeRate.baseApiUrl + c1
        const responose = await fetch(apiUrl)
        const data = await responose.json()
        const rate = data.rates[c2.toUpperCase()]
        return rate;

    }

}

const rate = ExchangeRate.getRate('eur')
console.log(rate)