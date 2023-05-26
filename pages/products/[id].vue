<script setup>
definePageMeta('nav-bottom')

const route = useRoute();
const { id } = route.params;
const uri = 'https://fakestoreapi.com/products/' + id;

const { data: product } = await useFetch(uri);


if (!product.value) {
    throw createError({
        status: 404,
        statusMessage: 'Product not found',
        fatal: true
    })
}
</script>

<template>
    <div>
        <ProductDetails :product="product" />
    </div>
</template>