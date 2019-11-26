import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      currencies: []
    },
    mounted() {
      this.getCurrencies();
    },
    methods: {
      getCurrencies: function () {
        fetch("https://api.exchangeratesapi.io/latest")
        .then(res => res.json())
        .then(data => this.currencies = data);
      }
    }
  });
});
