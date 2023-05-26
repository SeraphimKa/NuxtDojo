
<script setup>
const { product } = defineProps(['product'])
</script>

<template>
    <div class="card outline outline-red-600 bg-white rounded p-3 flex flex-col justify-between">
        <p class="font-bold text-gray-700 border-b border-gray-300 pb-2 mb-2">{{ product.title }}</p>
        <NuxtLink :to="`/products/${product.id}`">
            <img :src="product.image" alt="">
        </NuxtLink>
        <p class="text-yellow-600 font-semibold">{{ Intl.NumberFormat('de-DE', {
            style: 'currency', currency: 'EUR'
        }).format(product.price) }}</p>
    </div>
</template>