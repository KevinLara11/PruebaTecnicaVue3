<script setup>
import SearchBar from '../components/SearchBar.vue';
import {computed, ref} from 'vue';


const searchFilter = ref(''); 


const props = defineProps({
    items:{

        type: Array,
        required: true
    }
});


 const filteredItems = computed(() => {
    if (searchFilter.value !== '') {
        return items.filter(item => 
        item.title.includes(searchFilter.value) ||
        item.category.includes(searchFilter.value) 
        );
    } 

    return props.items;
});


const handleSearch = (search) => {
    searchFilter.value = search;

} 
</script>


<template>
    <div class="bg-white relative border rounded-lg">
        <div class="flex items-center justify-between">
            <!-- Search bar -->
            <SearchBar @search="handleSearch"/>

        </div>
        <table class="w-full text-sm text-left text-gray-500 sm:mx-auto">
            <thead class="text-xs text-gray-900 uppercase bg-green-200 font-bold">
                <tr>
                    <th class="px-4 py-3">ID</th>
                    <th class="px-7 py-3">TITULO</th>
                    <th class="px-4 py-3">PRECIO</th>
                    <th class="px-7 py-3">DESCRIPCIÓN</th>
                    <th class="px-4 py-3">CATEGORIA</th>
                    <th class="px-4 py-3">IMAGEN</th>
                    <th class="px-4 py-3">CLASIFICACIÓN</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in filteredItems" :key="item.id" class="border-b bg-slate-200">
                    <td class="px-4 py-3 font-medium text-gray-900">{{ item.id }}</td>
                    <td class="px-4 py-3 font-medium text-gray-900">{{ item.title }}</td>
                    <td class="px-4 py-3 text-gray-900">{{ item.price }}</td>
                    <td class="px-4 py-3 text-gray-900">{{ item.description }}</td>
                    <td class="px-4 py-3 text-gray-900">{{ item.category }}</td>
                    <td class="px4 py-3 text-gray-900"><img v-bind:src="item.imagen" alt="Image" style="max-width: 100px; max-height: 100px;"></td>
                    <!-- <td class="px-4 py-3">{{ item.imagen }}</td> -->
                    <td class="px-4 py-3 text-gray-900">{{ item.rating }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>