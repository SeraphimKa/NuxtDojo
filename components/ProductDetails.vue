<script setup>
const { product } = defineProps(['product'])
</script>

<template>
    <div class="product-card p-5 bg-red-100 rounded outline m-10 min-w-[5rem] min-h-[5rem]">
        <p class="tags bg-white sm:text-xl lg:text-3xl font-semibold rounded px-2 py-1 flex flex-wrap mb-2">{{
            product.category.charAt(0).toUpperCase() + product.category.slice(1) }}
        </p>
        <h2 class="title font-bold sm:text-2xl lg:text-4xl text-red-600 mb-2">{{ product.title }}</h2>
        <p class="description bg-red-700 lg:text-4xl p-2 rounded text-white mb-2 flex items-center gap-2"><img
                :src="product.image" alt="" class="sm:w-36 lg:w-96 h-full outline outline-1 rounded-sm outline-black">{{
                    product.description }}</p>

        <p class="price flex justify-end items-center gap-5 sm:text-3xl text-orange-300 bg-black rounded px-2">{{
            Intl.NumberFormat('de-DE',
                {
                    style:
                        'currency', currency: 'EUR'
                }).format(product.price) }} <button class="btn flex ">
                <i class="material-icons">add_shopping_cart</i>
            </button></p>
    </div>
</template>