<template>
  <div id="app">
    <Header/>

    <main class="container">
      <Catalog/>
      <Basket/>
    </main>
  </div>
</template>

<script>

import Header from '@/components/Header/Header';
import Catalog from '@/components/Catalog/Catalog';
import Basket from '@/components/Basket/Basket';

export default {
  name: 'App',
  components: {
    Basket,
    Catalog,
    Header
  }
};
</script>

<style>
*, *::before, *::after {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#app {
  --c-blue: #36f;
  --c-blue-hover: #0040ff;

  font-family: 'Roboto', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* reset */
input {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  border: 0;
  appearance: none;
}

button {
  padding: 0;
  background: none;
  border: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button:focus:not(:focus-visible) {
  outline: none;
}

h2 {
  margin: 0;
}

.visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  font-size: 0;
}

.sr-only {
  position: absolute !important;
  white-space: nowrap !important;
  width: 1px !important;
  height: 1px !important;
  overflow: hidden !important;
  border: 0 !important;
  padding: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  clip-path: inset(50%) !important;
  margin: -1px !important;
}
</style>
<style scoped>
.container {
  position: relative;
  overflow: hidden;
}

@media (min-width: 64em) {
  .container {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: start;
    min-height: calc(100vh - 82px);
  }
}
</style>
