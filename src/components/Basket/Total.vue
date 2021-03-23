<template>
  <table class="table">
    <caption class="sr-only">Basket total price</caption>
    <tbody>
    <tr class="table__row">
      <td class="table__cell">Subtotal</td>
      <td class="table__cell">
        <span class="sr-only">{{a11ySubtotal}}</span>
        <span aria-hidden="true">{{ subtotal }}</span>
      </td>
    </tr>

    <tr class="table__row">
      <td class="table__cell">Tax</td>
      <td class="table__cell">
        <span class="sr-only">{{a11yTax}}</span>
        <span aria-hidden="true">{{ tax }}</span>
      </td>
    </tr>

    <tr class="table__row">
      <td class="table__cell">Shipping</td>
      <td class="table__cell">
        <span class="sr-only">{{a11yShipping}}</span>
        <span aria-hidden="true">{{ shipping }}</span>
      </td>
    </tr>

    <tr v-show="discount !== 0" class="table__row">
      <td class="table__cell">Discount</td>
      <td class="table__cell">{{ discount }}</td>
    </tr>

    <tr class="table__row  table__row--large">
      <td class="table__cell  table__cell--bold">Total</td>
      <td class="table__cell  table__cell--bold">
        <span class="sr-only">{{a11yTotal}}</span>
        <span aria-hidden="true">{{ total }}</span>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import toString from '@/utils/toString';
import toA11yString from '@/utils/toA11yString';

export default {
  name: 'Total',
  data() {
    return {
      tax: toString(this.$root.tax),
      a11yTax: toA11yString(this.$root.tax),

      shipping: toString(this.$root.shipping),
      a11yShipping: toA11yString(this.$root.shipping),
    };
  },

  computed: {
    subtotal() {
      return toString(this.$root.itemsPrice);
    },
    a11ySubtotal() {
      return toA11yString(this.$root.itemsPrice);
    },

    total() {
      return toString(this.$root.totalPrice);
    },
    a11yTotal() {
      return toA11yString(this.$root.totalPrice);
    },

    discount() {
      if (this.$root.discount === 0) {
        return 0;
      }

      return this.$root.discount + '%';
    },
  },
};
</script>

<style scoped>
.table {
  width: 100%;
  padding-right: 15px;
  font-size: 14px;
  line-height: 2.42857;
}

.table__row--large {
  font-size: 18px;
}

.table__cell {
  padding: 0;
  font-weight: 400;
}

.table__cell--bold {
  font-weight: 700;
}

.table__cell:first-child {
  text-align: left;
}

.table__cell:last-child {
  text-align: right;
}
</style>
