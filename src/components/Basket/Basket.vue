<template>
  <article class="basket" :class="{'is-active': isActive}">
    <div ref="scrollableElm" class="basket__container">
      <Cart/>
      <hr class="basket__divider">
      <PromoCode/>
      <hr class="basket__divider">
      <Total/>
    </div>
  </article>
</template>

<script>
import Cart from '@/components/Basket/Cart/Cart';
import PromoCode from '@/components/Basket/PromoCode';
import Total from '@/components/Basket/Total';
import { disablePageScroll, enablePageScroll } from 'scroll-lock/dist/scroll-lock';

export default {
  name: 'Basket',
  components: { Total, PromoCode, Cart },
  computed: {
    isActive() {
      const isActive = this.$root.isVisibleBasket;

      if (isActive) {
        disablePageScroll(this.$refs.scrollableElm);
      } else {
        enablePageScroll(this.$refs.scrollableElm);
      }

      return isActive;
    }
  },
};
</script>

<style scoped>
.basket {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;

  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  width: 100%;
  height: 100%;

  transition-delay: 0.4s;
}

.basket.is-active {
  transition-delay: 0s;
}

.basket__container {
  position: relative;
  z-index: 5;

  width: 100%;
  height: calc(100vh - 82px);
  padding: 20px;
  background-color: #fff;
  overflow: hidden auto;

  transition-property: transform;
  transition-duration: 0.35s;
  transition-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
}

.basket.is-active .basket__container {
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 0.55, 0.45, 1);
}

.basket,
.basket__container {
  transform: translateX(100%);
}

.basket.is-active,
.basket.is-active .basket__container {
  transform: translateX(0);
}

.basket__divider {
  height: 1px;
  margin: 40px -40px; /* Обычно margin-top задавать не очень хорошо, но в данном случае это ок  */
  background-color: #cfcfcf;
  border: 0;
}

@media (min-width: 25em) {
  .basket__container {
    padding: 40px;
  }
}

@media (min-width: 48em) {
  .basket__container {
    width: 410px;
    border-left: 1px solid #cfcfcf;
  }

  .basket::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(2px);
    opacity: 0;
    transition: opacity 0.3s;
  }

  .basket.is-active::before {
    opacity: 1;
  }
}

@media (min-width: 64em) {
  .basket {
    position: static;

    width: 410px;
    height: 100%;
    border-left: 1px solid #cfcfcf;
    transform: translateX(0);
  }

  .basket::before {
    content: none;
  }

  .basket__container {
    position: sticky;
    top: 0;

    width: 100%;
    height: auto;

    border-left: 0;
    transform: translateX(0);
    overflow: auto;
  }
}
</style>
