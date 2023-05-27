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

const res = await useFetch('/api/joke')
const data = res.data.value
const setup = ref(data.body[0].setup)
const punchline = ref(data.body[0].punchline)
</script>

<template>
    <div>
        <ProductDetails :product="product" />
        <!-- if fetching, show loading -->
        <div class="loading" v-if="!data">Joke loading...</div>
        <div v-else class="joke mx-10 rounded outline outline-black">
            <h3 class="joke-title text-2xl bg-yellow-700 text-yellow-300 pt-2 pl-2">Random Dad Jokes</h3>
            <div class="joke bg-blue-700 indent-1">
                <p class="joke-setup text-blue-300">{{ setup }}</p>
                <p class="joke-punchline text-blue-700 hover:text-blue-200">{{ punchline }}</p>
            </div>
        </div>
    </div>
</template>