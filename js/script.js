/* =========================================================
   1. API CONFIGURATION
   ---------------------------------------------------------
   These variables store the API key and URL for a currency
   exchange rate service. In this script they are NOT used
   yet because the converter relies on hardcoded rates
   stored locally below.
   ========================================================= */

const API_KEY = "fxr_live_...";
const API_URL = "https://api.fxratesapi.com/latest";


/* =========================================================
   2. EXCHANGE RATE DATABASE
   ---------------------------------------------------------
   This object stores exchange rates for many currencies.
   All values are based on USD.

   Example:
   EUR: 0.845
   means
   1 USD = 0.845 EUR

   Using USD as a base makes conversions easy because
   any currency pair can be calculated through USD.
   ========================================================= */

let exchangeRates = {
  USD: 1,
  EUR: 0.845448115,
  GBP: 0.7335570803,
  JPY: 155.7230175525,
  VND: 26210.002804903,
  AUD: 1.4503002424,
  CAD: 1.3701002494,
  CNY: 6.9631011601,
  INR: 91.6740145137,
  MXN: 17.3646032925,
  BRL: 5.2905008855,
  KRW: 1442.9501782367,
  SGD: 1.27263025,
  CHF: 0.7805500978,
  SEK: 8.9464212631,
  NZD: 1.6812002728,
  RUB: 75.5000124557
};


/* =========================================================
   3. RATE CALCULATION ENGINE
   ---------------------------------------------------------
   This function calculates the exchange rate between
   two currencies.

   Formula used:
   rate = (USD → target currency) / (USD → source currency)

   Example:
   USD → EUR = 0.84
   USD → JPY = 155

   EUR → JPY = 155 / 0.84
   ========================================================= */

function getRate(from, to) {
  const usdToFrom = exchangeRates[from];
  const usdToTo = exchangeRates[to];

  if (!usdToFrom || !usdToTo) return 0;

  return usdToTo / usdToFrom;
}


/* =========================================================
   4. NUMBER FORMATTING
   ---------------------------------------------------------
   JavaScript floating-point math often creates long
   decimal numbers. This function rounds values to
   6 decimal places so results look clean in the UI.
   ========================================================= */

function formatNumber(n) {
  if (Number.isFinite(n)) {
    return Math.round(n * 1000000) / 1000000;
  }
  return 0;
}


/* =========================================================
   5. RATE DISPLAY
   ---------------------------------------------------------
   Updates the label showing the exchange rate used
   for the conversion.

   Example output:
   1 USD = 0.845 EUR
   ========================================================= */

function updateRateDisplay(from, to, rate) {
  const el = document.getElementById('rateDisplay');

  if (el) {
    el.textContent = `1 ${from} = ${formatNumber(rate)} ${to}`;
  }
}


/* =========================================================
   6. MAIN CONVERSION FUNCTION
   ---------------------------------------------------------
   This is the core logic of the currency converter.

   Steps:
   1. Read user input amount
   2. Read selected currencies
   3. Calculate exchange rate
   4. Multiply amount × rate
   5. Display result
   ========================================================= */

function convert() {

  const amountEl = document.getElementById('amount');
  const resultEl = document.getElementById('result');
  const fromSel = document.getElementById('fromCurrency');
  const toSel = document.getElementById('toCurrency');

  if (!amountEl || !resultEl || !fromSel || !toSel) return;

  const amount = parseFloat(amountEl.value) || 0;
  const from = fromSel.value;
  const to = toSel.value;

  const rate = getRate(from, to);

  const converted = amount * rate;

  resultEl.value = formatNumber(converted);

  updateRateDisplay(from, to, rate);
}


/* =========================================================
   7. SWAP FUNCTION
   ---------------------------------------------------------
   Allows users to quickly swap the source and target
   currencies.

   Example:
   USD → EUR
   becomes
   EUR → USD
   ========================================================= */

function swapCurrencies() {

  const fromSel = document.getElementById('fromCurrency');
  const toSel = document.getElementById('toCurrency');

  if (!fromSel || !toSel) return;

  const tmp = fromSel.value;

  fromSel.value = toSel.value;
  toSel.value = tmp;

  convert();
}


/* =========================================================
   8. EXCHANGE RATE TABLE
   ---------------------------------------------------------
   Builds a table showing USD exchange rates for several
   popular currencies.

   This is purely informational and separate from the
   converter calculation.
   ========================================================= */

function populateRatesTable() {

  const tbody = document.getElementById('rates-tbody');
  const updated = document.getElementById('rates-updated');

  if (!tbody) return;

  const popular = [
    'EUR','GBP','JPY','AUD','CAD',
    'CNY','INR','MXN','BRL','KRW',
    'SGD','CHF','SEK','NZD','RUB','VND'
  ];

  tbody.innerHTML = '';

  const base = 'USD';

  const time = new Date().toLocaleString();

  popular.forEach(cur => {

    if (!exchangeRates[cur]) return;

    const rate = getRate(base, cur);

    const row = `
      <tr>
        <td>${base}/${cur}</td>
        <td>${formatNumber(rate)}</td>
        <td>${time}</td>
      </tr>
    `;

    tbody.innerHTML += row;
  });

  if (updated) {
    updated.textContent = `Last update: ${time}`;
  }
}


/* =========================================================
   9. PAGE INITIALIZATION
   ---------------------------------------------------------
   Runs when the page loads. It attaches event listeners
   so the converter reacts to user input.
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  const amountEl = document.getElementById('amount');
  const fromSel = document.getElementById('fromCurrency');
  const toSel = document.getElementById('toCurrency');
  const swapBtn = document.querySelector('.btn-swap');

  if (amountEl) amountEl.addEventListener('input', convert);
  if (fromSel) fromSel.addEventListener('change', convert);
  if (toSel) toSel.addEventListener('change', convert);

  if (swapBtn) {
    swapBtn.addEventListener('click', (e) => {
      e.preventDefault();
      swapCurrencies();
    });
  }

  // run initial conversion and build table
  convert();
  populateRatesTable();
});