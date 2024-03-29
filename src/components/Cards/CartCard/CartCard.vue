<template>
  <article class="card" :aria-label="title">
    <div class="card__image">
      <CardImage :width="90" :height="51" :jpg-path="jpgImg" :webp-path="webpImg" alt="Describe product image."/>
    </div>

    <h2 class="card__title">{{ title }}</h2>

    <div class="card__controllers">
      <div class="controllers">
        <button @click="handleClickRemove" :disabled="count === 1" type="button"
                class="controllers__btn controllers__btn--remove"
                aria-label="Decrease item count."></button>
        <span class="controllers__count">
          <span class="sr-only">Total item count {{ count }}</span>
          <span aria-hidden="true">{{ count }}</span>
        </span>
        <button @click="handleClickAdd" type="button" class="controllers__btn controllers__btn--add"
                aria-label="Increase item count."></button>
      </div>

      <span class="card__price">
        <span class="sr-only">Total item price {{ a11yPrice }}</span>
        <span aria-hidden="true">{{ formattedPrice }}</span>
      </span>
    </div>

    <button @click="handleClickDelete" type="button" class="card__remove"
            aria-label="Remove item from basket."></button>
  </article>
</template>

<script>
import toString from '@/utils/toString';
import toA11yString from '@/utils/toA11yString';
import CardImage from '@/components/Cards/CardImage';

export default {
  name: 'CartItem',
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
    count: {
      type: Number,
      required: true
    },
    images: {
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
    handleClickAdd() {
      this.$root.changeBasketItemCount(this.id, 'add');
    },
    handleClickRemove() {
      this.$root.changeBasketItemCount(this.id, 'remove');
    },
    handleClickDelete() {
      this.$root.removeBasketItems(this.id);
    }
  }
};
</script>

<style scoped>
.card {
  display: grid;
  grid-template-columns:80px repeat(2, minmax(auto, 95px)) 18px;
  justify-content: start;
  align-items: start;
  column-gap: 12px;
  row-gap: 15px;
  grid-template-areas:
      'image title title remove'
      'image controllers controllers remove';

  margin-bottom: 40px;
}

.card:last-of-type {
  margin-bottom: 0;
}

.card__image {
  grid-area: image;

  position: relative;
  height: 0;
  padding-top: 100%; /* aspect ratio */
}

.card__title {
  grid-area: title;

  font-size: 14px;
  font-weight: 400;
}

.card__controllers {
  grid-area: controllers;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.controllers {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 84px;
  margin-right: 25px;
}

.controllers__btn {
  width: 20px;
  height: 20px;

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  border-radius: 50%;
  transition: opacity 0.3s;
}

.controllers__btn:hover {
  opacity: 0.75;
}

.controllers__btn--add {
  background-image: url("plus.svg");
}

.controllers__btn--remove {
  background-image: url("minus.svg");
}

.card__price {
  white-space: nowrap;
}

.card__remove {
  grid-area: remove;

  width: 18px;
  height: 18px;
  background-image: url("remove.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  opacity: 0.2;
  transition: opacity 0.3s;
}

.card__remove:hover,
.card__remove:focus {
  opacity: 1;
}

/* ~374px */
@media (min-width: 23.4em) {
  .card {
    grid-template-columns: 100px repeat(2, minmax(auto, 95px)) 18px;
  }

  .card__controllers {
    justify-content: start;
    gap: 25px;
  }
}
</style>
