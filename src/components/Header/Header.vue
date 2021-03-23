<template>
  <header class="header">
    <Logo/>
    <Cart/>
    <Hamburger/>
  </header>
</template>

<script>
import Logo from '@/components/Header/Logo';
import Cart from '@/components/Header/Cart';
import Hamburger from '@/components/Header/Hamburger';

export default {
  name: 'Header',
  components: { Hamburger, Cart, Logo },
};
</script>

<style scoped>
.header {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr;
  gap: 30px;
  align-items: center;

  padding-top: 26px;
  padding-bottom: 23px;
  padding-left: 20px;
  padding-right: 24px;

  border-bottom: 1px solid #cfcfcf;
}
</style>
