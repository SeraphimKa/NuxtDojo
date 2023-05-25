<script setup>

definePageMeta({
    layout: 'nav-bottom'
})

const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>

<template>
    <h1 class="text-red-600 text-4xl bg-red-100 p-3 border-b border-red-600">Products</h1>
    <div class="grid grid-cols-4 gap-5 p-5">
        <div v-for="product in  products " :key="product.id"
            class=" outline outline-red-600 bg-white rounded p-3 flex flex-col justify-between">
            <p class="font-bold text-gray-700 border-b border-gray-300 pb-2 mb-2">{{ product.title }}</p>
            <NuxtLink :to="`/products/${product.id}`">
                <img :src="product.image" alt="">
            </NuxtLink>
            <p class="text-yellow-600 font-semibold">{{ product.price }}€</p>

        </div>
    </div>
</template>