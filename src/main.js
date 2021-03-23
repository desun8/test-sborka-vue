import Vue from 'vue';
import App from './App.vue';
import { worker } from '@/mocks/browser.js';
import round from '@/utils/round';

Vue.config.productionTip = false;

worker.start();


// Или можно было реализовать с помощью vuex
new Vue({
  data: {
    basketItems: [],
    tax: 100,
    shipping: 150,
    discount: 0,
    isVisibleBasket: false,
  },
  computed: {
    itemsPrice() {
      return this.basketItems.reduce((accum, currVal) => {
        return accum + currVal.totalPrice;
      }, 0);
    },

    totalItems() {
      return this.basketItems.reduce((accum, currVal) => {
        return accum + currVal.count;
      }, 0);
    },

    totalPrice() {
      const price = this.itemsPrice + this.tax + this.shipping;
      const discount = (this.discount / 100) * price;
      return round(price - discount);
    }
  },
  methods: {
    setDiscount(newVal) {
      this.discount = newVal;
    },

    addBasketItems(newItem) {
      const isExist = this.basketItems.some(item => item.id === newItem.id);

      if (isExist) {
        this.changeBasketItemCount(newItem.id, 'add');
      } else {
        this.basketItems = [...this.basketItems, newItem];
      }
    },

    removeBasketItems(id) {
      this.basketItems = this.basketItems.filter(item => item.id !== id);
    },

    changeBasketItemCount(id, type) {
      switch (type) {
        case 'add':
          this.basketItems = this.basketItems.map(item => {
            if (item.id === id) {
              item.count += 1;
              item.totalPrice = item.price * item.count;
            }

            return item;
          });
          break;
        case 'remove':
          this.basketItems = this.basketItems.map(item => {
            if (item.id === id && item.count > 1) {
              item.count -= 1;
              item.totalPrice = item.price * item.count;
            }

            return item;
          });
          break;
      }
    },

    showBasket(value) {
      this.isVisibleBasket = value;
    },
  },
  render: h => h(App),
}).$mount('#app');
