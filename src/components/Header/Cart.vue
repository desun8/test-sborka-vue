<template>
  <span class="cart" aria-describedby="cart-label">
    <span id="cart-label" class="visually-hidden">Cart has {{ count }} items.</span>

    <span v-show="count" class="cart__count" :class="countClassMod" aria-hidden="true">{{ count }}</span>
  </span>
</template>

<script>
export default {
  name: 'Cart',
  // props: {
  //   count: {
  //     type: Number,
  //     required: true
  //   }
  // },
  computed: {
    count() {
      return this.$root.totalItems;
    },

    countClassMod() {
      if (this.count >= 10 && this.count < 100) {
        return 'cart__count--md';
      } else if (this.count >= 100) {
        return 'cart__count--lg';
      } else {
        return '';
      }
    }
  }
};
</script>

<style scoped>
.cart {
  --spacing: 3px;

  position: relative;
  width: 30px;
  height: 28px;

  background-image: url(../../assets/images/cart.svg);
  background-repeat: no-repeat;
  background-position: left calc(var(--spacing) + 1px);
}

.cart__count {
  position: absolute;
  top: calc(var(--spacing) * -1);
  right: 0;

  width: 13px;
  height: 13px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--c-blue);
  color: #fff;
  font-size: 10px;
  border-radius: 50%;
}

.cart__count--md {
  top: calc((2px + var(--spacing)) * -1);
  right: -2px;
  width: 17px;
  height: 17px;
}

.cart__count--lg {
  top: calc((4px + var(--spacing)) * -1);
  right: -4px;
  width: 21px;
  height: 21px;
}
</style>
