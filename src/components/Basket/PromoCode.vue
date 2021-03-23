<template>
  <form @submit="handleSubmit" action="/api/promocode" class="form">
    <label for="promocode" class="form__label">Promo code</label>
    <input id="promocode" type="text" class="form__field" name="promocode" placeholder="Enter your promo code">
    <button type="submit" class="form__submit">Apply</button>
  </form>
</template>

<script>
export default {
  name: 'PromoCode',
  methods: {
    handleSubmit(event) {
      event.preventDefault();

      const url = event.currentTarget.action || '/api/promocode';
      const data = new FormData(event.currentTarget);

      fetch(url, { method: 'POST', body: data })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`${response.status}`);
            }

            return response.json();
          })
          .then(response => {
            if (response.message === 'ERROR') {
              throw new Error(`${response.status}`);
            }

            const discount = +response.result;
            this.$root.setDiscount(discount);
          })
          .catch((error) => {
            console.error(error);
          });
    },
  }
};
</script>

<style scoped>
.form {
  display: grid;
  grid-template-columns: 1fr 95px;
  column-gap: 10px;

  font-size: 14px;
  line-height: 1.75;
}

.form__label {
  grid-column: 1/3;
  margin-bottom: 30px;
  font-size: 18px;
  font-weight: 700;
}

.form__field {
  padding: 8px 10px;
  background-color: #ededf1;
  font-size: 16px;
  border-radius: 3px;
}

.form__field::placeholder {
  color: #8e90a6;
}

.form__submit {
  padding: 8px 30px;
  background-color: var(--c-blue);
  color: #fff;
  border-radius: 3px;
  transition: background-color 0.3s;
}

.form__submit:hover {
  background-color: var(--c-blue-hover);
}
</style>
