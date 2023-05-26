<script setup>

definePageMeta({
    layout: 'nav-bottom'
})

const { data: products } = await useFetch('https://fakestoreapi.com/products')

useHead({
    title: 'Nuxt Dojo | Merch',
    meta: [
        {
            name: 'description',
            content: 'Nuxt 3 Merch'
        }
    ]
})
</script>

<template>
    <h1 class="text-red-600 text-4xl bg-red-100 p-3 border-b border-red-600">Products</h1>
    <div class="grid grid-cols-4 gap-5 p-5">
        <div v-for="product in  products " :key="product.id">
            <ProductCard :product="product" />
        </div>
    </div>
</template>