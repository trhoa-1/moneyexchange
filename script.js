const API_KEY = 'fxr_live_5c65d8ad56ef078646fc6f819cc52ba705e8';
const API_URL = 'https://api.fxratesapi.com/latest';

let exchangeRates = {
  "ADA": 2.8102680129,
    "AED": 3.6731007206,
    "AFN": 66.3163066921,
    "ALL": 82.5000106674,
    "AMD": 379.0700476731,
    "ANG": 1.7880002015,
    "AOA": 912.2151768577,
    "ARB": 5.7214344631,
    "ARS": 1434.0031675545,
    "AUD": 1.4503002424,
    "AWG": 1.79,
    "AZN": 1.7,
    "BAM": 1.6661002434,
    "BBD": 2,
    "BDT": 122.2600197681,
    "BGN": 1.6650002802,
    "BHD": 0.376,
    "BIF": 2961.8503800689,
    "BMD": 1,
    "BNB": 0.0011361777,
    "BND": 1.2720002344,
    "BOB": 6.9300011885,
    "BRL": 5.2905008855,
    "BSD": 1,
    "BTC": 0.0000112768,
    "BTN": 91.7015502571,
    "BWP": 12.9032016341,
    "BYN": 2.8118741606,
    "BYR": 28118.742617518,
    "BZD": 2,
    "CAD": 1.3701002494,
    "CDF": 2199.6903309345,
    "CHF": 0.7805500978,
    "CLF": 0.0218100024,
    "CLP": 866.5800950709,
    "CNY": 6.9631011601,
    "COP": 3637.5206098364,
    "CRC": 498.2579085374,
    "CUC": 1,
    "CUP": 24,
    "CVE": 94.0100114861,
    "CZK": 20.5178021684,
    "DAI": 0.9991949376,
    "DJF": 177.721,
    "DKK": 6.3130010196,
    "DOP": 62.8200101429,
    "DOT": 0.5256560022,
    "DZD": 129.9840246265,
    "EGP": 47.2000091939,
    "ERN": 15,
    "ETB": 155.6790249243,
    "ETH": 0.0003407817,
    "EUR": 0.845448115,
    "FJD": 2.254200236,
    "FKP": 0.7329619637,
    "GBP": 0.7335570803,
    "GEL": 2.694600417,
    "GGP": 0.7329619739,
    "GHS": 10.8827020419,
    "GIP": 0.7329619819,
    "GMD": 74.710007609,
    "GNF": 8769.0015299029,
    "GTQ": 7.670001147,
    "GYD": 208.980040335,
    "HKD": 7.7962015035,
    "HNL": 26.4613049958,
    "HRK": 6.3719741567,
    "HTG": 133.1300247351,
    "HUF": 323.1100485928,
    "IDR": 16838.003206123,
    "ILS": 3.1356905744,
    "IMP": 0.7329619358,
    "INR": 91.6740145137,
    "IQD": 1310.5002142142,
    "IRR": 1076000.1775314,
    "ISK": 123.2700136378,
    "JEP": 0.732961948,
    "JMD": 156.9400226963,
    "JOD": 0.71,
    "JPY": 155.7230175525,
    "KES": 129.0146801198,
    "KGS": 87.4500169715,
    "KHR": 4024.0007256408,
    "KMF": 419.7200639246,
    "KPW": 900.0428988693,
    "KRW": 1442.9501782367,
    "KWD": 0.3066000458,
    "KYD": 0.83333,
    "KZT": 504.8500755994,
    "LAK": 21488.003309881,
    "LBP": 89500.011125912,
    "LKR": 309.8000355811,
    "LRD": 185.2870361084,
    "LSL": 16.2940029375,
    "LTC": 0.0145918803,
    "LTL": 2.9200547381,
    "LVL": 0.5943623926,
    "LYD": 6.3628008108,
    "MAD": 9.1000015874,
    "MDL": 16.9300020683,
    "MGA": 4520.0007507433,
    "MKD": 52.5200090237,
    "MMK": 2098.6803126851,
    "MNT": 3563.9827775849,
    "MOP": 8.0301011835,
    "MRO": 356.999828,
    "MUR": 45.9000073571,
    "MVR": 15.4600030838,
    "MWK": 1733.6743253569,
    "MXN": 17.3646032925,
    "MYR": 4.0060004915,
    "MZN": 63.5500071266,
    "NAD": 16.1183016819,
    "NGN": 1418.7001889557,
    "NIO": 36.7212115579,
    "NOK": 9.7673714124,
    "NPR": 146.8790204646,
    "NZD": 1.6812002728,
    "OMR": 0.3850000728,
    "OP": 3.322161463,
    "PAB": 1.0000001173,
    "PEN": 3.3557005253,
    "PGK": 4.2644007606,
    "PHP": 58.9400068295,
    "PKR": 279.7000432885,
    "PLN": 3.5592005758,
    "PYG": 6687.001220304,
    "QAR": 3.6410004617,
    "RON": 4.3057007485,
    "RSD": 99.2680183519,
    "RUB": 75.5000124557,
    "RWF": 1454.4802047974,
    "SAR": 3.7502003933,
    "SBD": 8.1243836264,
    "SCR": 14.9194019954,
    "SDG": 601.5,
    "SEK": 8.9464212631,
    "SGD": 1.27263025,
    "SHP": 0.7336001453,
    "SLL": 22780.503200169,
    "SOL": 0.0079099131,
    "SOS": 565.9001111914,
    "SRD": 38.1000038948,
    "STD": 20862.083095677,
    "SVC": 8.75,
    "SYP": 110.5751636732,
    "SZL": 16.0805017223,
    "THB": 30.9800045159,
    "TJS": 9.3464013386,
    "TMT": 3.5,
    "TND": 2.879500325,
    "TOP": 2.3708004351,
    "TRY": 43.3754075269,
    "TTD": 6.7464012772,
    "TWD": 31.3970047015,
    "TZS": 2533.0003049816,
    "UAH": 43.2917055542,
    "UGX": 3545.2007084153,
    "USD": 1,
    "UYU": 37.562006318,
    "UZS": 12084.95126685,
    "VEF": 35214360.868264,
    "VND": 26210.002804903,
    "VUV": 119.962430409,
    "WST": 2.7555906,
    "XAF": 554.5800996926,
    "XAG": 0.0096831397,
    "XAU": 0.0002007054,
    "XCD": 2.7,
    "XDR": 0.7318100921,
    "XOF": 554.5801080033,
    "XPD": 0.0004964043,
    "XPF": 101.8000103661,
    "XPT": 0.0003602316,
    "XRP": 0.5276516582,
    "YER": 238.2400270159,
    "ZAR": 16.1061021711,
    "ZMK": 9001.2,
    "ZMW": 19.5500038736,
    "ZWL": 64016.645883199
};

const amountInput = document.getElementById('amount');
const resultInput = document.getElementById('result');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const rateDisplay = document.getElementById('rateDisplay');
const convertBtn = document.querySelector('.btn-convert');
const swapBtn = document.querySelector('.btn-swap');

// Fetch live exchange rates from API
async function fetchExchangeRates() {
  try {
    const currencies = 'USD,EUR,GBP,JPY,AUD,CAD,CHF';
    const response = await fetch(
      `${API_URL}?apikey=${API_KEY}&base_currency=USD&currencies=${currencies}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch rates');
    }
    
    const data = await response.json();
    
    if (data.data) {
      exchangeRates = {
        USD: 1,
        EUR: data.data.EUR || exchangeRates.EUR,
        GBP: data.data.GBP || exchangeRates.GBP,
        JPY: data.data.JPY || exchangeRates.JPY,
        AUD: data.data.AUD || exchangeRates.AUD,
        CAD: data.data.CAD || exchangeRates.CAD,
        CHF: data.data.CHF || exchangeRates.CHF
      };
      console.log('✓ Exchange rates updated from API', exchangeRates);
    }
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    console.log('Using fallback rates');
  }
}

// Convert currency
function convertCurrency() {
  const amount = parseFloat(amountInput.value) || 0;
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (amount === 0) {
    resultInput.value = '';
    updateRateDisplay();
    return;
  }

  // Convert to USD first, then to target currency
  const amountInUSD = amount / exchangeRates[from];
  const convertedAmount = amountInUSD * exchangeRates[to];
  
  resultInput.value = convertedAmount.toFixed(2);
  updateRateDisplay();
}

// Update rate display
function updateRateDisplay() {
  const from = fromCurrency.value;
  const to = toCurrency.value;
  const rate = exchangeRates[to] / exchangeRates[from];
  rateDisplay.textContent = `1 ${from} = ${rate.toFixed(4)} ${to}`;
}

// Swap currencies
function swapCurrencies() {
  const temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;
  convertCurrency();
}

// Event listeners
amountInput.addEventListener('input', convertCurrency);
fromCurrency.addEventListener('change', convertCurrency);
toCurrency.addEventListener('change', convertCurrency);
convertBtn.addEventListener('click', convertCurrency);
swapBtn.addEventListener('click', swapCurrencies);

// Initialize on load
window.addEventListener('DOMContentLoaded', () => {
  fetchExchangeRates();
  amountInput.value = '1';
  convertCurrency();
});