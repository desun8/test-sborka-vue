<template>
  <section class="catalog">
    <ProductCard
        v-for="item in productItems"
        :key="item.id"
        :id="item.id"
        :title="item.name"
        :price="item.price"
        :images="item.image"
        :preview="item.preview"
    />
  </section>
</template>

<script>
import ProductCard from '@/components/Cards/ProductCard/ProductCard';

export default {
  name: 'Catalog',
  components: { ProductCard },
  data() {
    return {
      productItems: null,
    };
  },
  created() {
    fetch('/api/productItems')
        .then((response) => {
          if (!response.ok) {
            throw new Error(`${response.status}`);
          }

          return response.json();
        })
        .then(json => {
          this.productItems = JSON.parse(json.results);
        })
        .catch((error) => {
          console.error(error);
        });
  }
};
</script>

<style scoped>
.catalog {
  --col: 1;

  display: grid;
  grid-template-columns: repeat(var(--col), 250px);
  gap: 50px;
  justify-content: center;

  padding: 60px 0;
}

/* 592px */
@media (min-width: 37em) {
  .catalog {
    --col: 2;
  }
}

/* 768px */
@media (min-width: 48em) {
  .catalog {
    column-gap: 70px;
  }
}

/* 1344 */
@media (min-width: 84em) {
  .catalog {
    --col: 3;
  }
}
</style>
