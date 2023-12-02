<script setup>

import DataTable from './views/DataTable.vue';
import { onMounted, ref } from 'vue';

//Agregar Carrito
/* import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['cart']),
  },
}; */

const items = ref([]);

onMounted(async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  items.value = await response.json();
});
</script>

<template>
  <div class="p-8 bg-gray-100 min-h-screen">
    <DataTable :items="items"/>
  </div>

 <!--  // Segundo paso -->
<!--   <div>
    <router-view></router-view>
    <div>
      <h2>Carrito de compras</h2>
      <ul>
        <li v-for="product in cart" :key="product.id">
          {{ product.name }} - {{ product.price }}
        </li>
      </ul>
    </div>
  </div> -->
</template>

