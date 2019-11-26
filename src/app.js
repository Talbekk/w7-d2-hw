import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      currencies: [],
      amount: 0,
      selectedCurrencyRate: null,
      convertedResult: 0,
      reversedAmount: 0,
      reversedCurrencyRate: null,
      reversedResult: 0,
      reversedCurrency: []
    },
    mounted() {
      this.getCurrencies();
    },
    methods: {
      getCurrencies: function () {
        fetch("https://api.exchangeratesapi.io/latest")
        .then(res => res.json())
        .then(data => this.currencies = data);
      },
      getConversion: function () {
        this.reversedResult = 0;
        const result = this.selectedCurrencyRate * this.amount;
        this.convertedResult = result;
        this.amount = 0;
        this.selectedCurrencyRate = null;
      },
      getReverseConversion: function () {
        this.convertedResult = 0;
        this.reversedCurrency = [];
        const result = this.reversedAmount / this.reversedCurrencyRate;
        this.reversedResult = result;
        const currencyList = Object.entries(this.currencies.rates);
        const selectedCurrency = currencyList.find(currency => this.reversedCurrencyRate === currency[1]);
        this.reversedCurrency.push(selectedCurrency);
        this.reversedAmount = 0;
        this.reversedCurrencyRate = null;
      }
      }
  });
});
