<template>
  <article class="total">
    <table class="table">
      <tr class="table__row">
        <th class="table__cell">Subtotal</th>
        <th class="table__cell">{{ subtotal }}</th>
      </tr>

      <tr class="table__row">
        <th class="table__cell">Tax</th>
        <th class="table__cell">{{ tax }}</th>
      </tr>

      <tr class="table__row">
        <th class="table__cell">Shipping</th>
        <th class="table__cell">{{ shipping }}</th>
      </tr>

      <tr v-show="discount !== 0" class="table__row">
        <th class="table__cell">Discount</th>
        <th class="table__cell">{{ discount }}</th>
      </tr>

      <tr class="table__row">
        <th class="table__cell  table__cell--bold">Total</th>
        <th class="table__cell  table__cell--bold">{{ total }}</th>
      </tr>
    </table>
  </article>
</template>

<script>
import toString from '@/utils/toString';

export default {
  name: 'Total',
  data() {
    return {
      tax: toString(this.$root.tax),
      shipping: toString(this.$root.shipping),
    };
  },

  computed: {
    subtotal() {
      return toString(this.$root.itemsPrice);
    },

    total() {
      return toString(this.$root.totalPrice);
    },
    discount() {
      if (this.$root.discount === 0) {
        return 0;
      }

      return this.$root.discount + '%';
    }
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
