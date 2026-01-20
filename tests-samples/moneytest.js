import {formatCurrency} from '../scripts/utils/money.js';

function testCurrency() {
  let resultSummary = '';
    resultSummary += '<p>1. converts cents into dollars</p>';
    if (formatCurrency(2095) === '20.95') {
      resultSummary += '<p>passed</p>';
    }else {
      resultSummary += '<p>failed</p>';
    }

    resultSummary += '<p>2. works with 0</p>';
    if (formatCurrency(0) === '0.00') {
      resultSummary += '<p>passed</p>';
    }else {
      resultSummary += '<p>failed</p>';
    }

    resultSummary += '<p>3. rounds up to the nearest upper cent</p>';
    if (formatCurrency(2000.5) === '20.01') {
      resultSummary += '<p>passed</p>';
    }else {
      resultSummary += '<p>failed</p>';
    }

    resultSummary += '<p>4. rounds up to the lower nearest cent</p>';
    if (formatCurrency(2000.4) === '20.00') {
      resultSummary += '<p>passed</p>';
    }else {
      resultSummary += '<p>failed</p>';
    }
    displayTestResults(resultSummary);
}

document.querySelector('.js-test-currency').addEventListener('click', () => {
  testCurrency();
})

function displayTestResults(resultSummary) {
  document.querySelector('.js-test-summary-grid').innerHTML = resultSummary;
}