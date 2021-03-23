<template>
  <article class="cart" aria-label="Cart">
    <h2 class="cart__title">My basket</h2>

    <CartItem
        v-for="item in basketItems"
        :key="item.id"
        :id="item.id"
        :title="item.name"
        :count="item.count"
        :price="item.totalPrice"
        :images="item.images"
    />
    <span v-if="basketItems.length === 0">Empty</span>
  </article>
</template>

<script>
import CartItem from '@/components/Basket/Cart/CartItem';

export default {
  name: 'Cart',
  components: { CartItem },
  computed: {
    basketItems() {
      console.log(this.$root.basketItems);
      return this.$root.basketItems;
    }
  }
};
</script>

<style scoped>
.cart__title {
  margin-bottom: 30px;
  font-size: 18px;
}
</style>
