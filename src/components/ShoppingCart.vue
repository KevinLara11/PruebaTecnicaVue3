<template>
  <div>
    <span>{{ product.name }}</span>
    <span>{{ product.price }}</span>
    <button @click="addProductToCart(product)">Agregar al carrito</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['product'],
  methods: {
    ...mapActions(['addProductToCart']),
  },
};
</script>

