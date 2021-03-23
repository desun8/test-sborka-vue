<template>
  <article class="card" :aria-label="title">
    <div class="card__image">
      <CardImage :width="228" :height="130" :jpg-path="jpgImg" :webp-path="webpImg" alt="Describe product image."/>
    </div>

    <h2 class="card__title">{{ title }}</h2>
    <button @click="handleClick" type="button" class="card__add" :aria-labelledby="`btn-label-${id}`">
      <span :id="`btn-label-${id}`" class="visually-hidden">Add {{ title }} to cart.</span>
    </button>
    <span class="card__price">
      <span class="sr-only">Item price {{a11yPrice}}</span>
      <span aria-hidden="true">{{ formattedPrice }}</span>
    </span>
  </article>
</template>

<script>
import toString from '@/utils/toString';
import toA11yString from '@/utils/toA11yString';
import CardImage from '@/components/Cards/CardImage';

export default {
  name: 'ProductCard',
  components: { CardImage },
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    images: {
      type: Array,
      required: true
    },
    preview: {
      type: Array,
      required: true
    },
  },

  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  },

  computed: {
    webpImg() {
      return `${this.publicPath}images/products/${this.images[3]} 2x, ${this.publicPath}images/products/${this.images[2]} 1x`;
    },

    jpgImg() {
      return `${this.publicPath}images/products/${this.images[1]} 2x, ${this.publicPath}images/products/${this.images[0]} 1x`;
    },

    formattedPrice() {
      return toString(this.price);
    },

    a11yPrice() {
      return toA11yString(this.price);
    }
  },

  methods: {
    createItem() {
      return {
        id: this.id,
        name: this.title,
        images: this.preview,
        count: 1,
        price: this.price,
        totalPrice: this.price
      };
    },
    handleClick() {
      const item = this.createItem();
      this.$root.addBasketItems(item);
    }
  }
};
</script>

<style scoped>
.card {
  display: grid;
  grid-template-columns: auto 1fr;
  row-gap: 12px;
  column-gap: 15px;
  grid-template-areas:
      'image image'
      'title title'
      'btn price';
  align-items: center;

  max-width: 250px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  border: 1px solid #e7e7e7;
  border-radius: 3px;
}

.card__image {
  grid-area: image;

  position: relative;
  height: 0;
  margin-left: -5px;
  margin-right: -5px;
  padding-top: calc(188 / (250 - 30) * 100%); /* aspect ratio */
}

.card__title {
  grid-area: title;

  padding-right: 55px;
  font-size: 14px;
}

.card__add {
  grid-area: btn;

  width: 40px;
  height: 40px;

  background-color: var(--c-blue);
  background-image: url('cart.svg');
  background-repeat: no-repeat;
  background-position: center;

  border-radius: 3px;
  transition: background-color 0.3s;
}

.card__add:hover {
  background-color: var(--c-blue-hover);
}

.card__price {
  grid-area: price;

  font-size: 14px;
}
</style>
