<template>
  <picture>
    <source type="image/webp" :srcset="webpPath">
    <img class="image" :srcset="jpgPath" :width="width" :height="height" :alt="alt" loading="lazy">
  </picture>
</template>
<script>
export default {
  name: 'CardImage',
  props: {
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    jpgPath: {
      type: String,
      required: true
    },
    webpPath: {
      type: String,
      required: true
    },
    alt: String
  }
};
</script>
<style scoped>
.image {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
}
</style>
