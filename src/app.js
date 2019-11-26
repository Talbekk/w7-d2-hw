import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      currencies: [],
      amount: 0,
      selectedCurrencyRate: null,
      convertedResult: 0
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
        const result = this.selectedCurrencyRate * this.amount;
        this.convertedResult = result;
        this.amount = 0;
        this.selectedCurrencyRate = null;
      }
      }
  });
});
