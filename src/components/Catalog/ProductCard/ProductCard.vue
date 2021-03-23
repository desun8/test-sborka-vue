<template>
  <article class="card">
    <div class="card__img-container">
      <picture>
        <source type="image/webp" :srcset="webpImg">
        <img class="card__picture" :srcset="jpgImg" width="228" height="130" :alt="title" loading="lazy">
      </picture>
    </div>
    <h6 class="card__title">{{ title }}</h6>
    <button @click="handleClick" type="button" class="card__add" :aria-labelledby="`btn-label-${id}`">
      <span :id="`btn-label-${id}`" class="visually-hidden">Add {{ title }} to cart.</span>
    </button>
    <span class="card__price">{{ formattedPrice }}</span>
  </article>
</template>

<script>
import toString from '@/utils/toString';

export default {
  name: 'ProductCard',
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

.card__img-container {
  grid-area: image;

  position: relative;
  height: 0;
  margin-left: -5px;
  margin-right: -5px;
  padding-top: calc(188 / 250 * 100%); /* aspect ratio */
}

.card__picture {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
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
