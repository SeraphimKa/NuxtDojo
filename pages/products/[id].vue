<script setup>
definePageMeta('nav-bottom')

const route = useRoute();
const { id } = route.params;
const uri = 'https://fakestoreapi.com/products/' + id;

const { data: product } = await useFetch(uri);

</script>

<template>
    <div>
        <div class="product-card p-5 bg-red-100 rounded outline m-10 min-w-[5rem] min-h-[5rem]">
            <h2 class="title font-bold text-2xl text-red-600 mb-2">{{ product.title }}</h2>
            <p class="tags bg-white font-semibold rounded px-2 py-1 flex flex-wrap mb-2">{{ product.category }}
            </p>
            <p class="description bg-red-700 p-2 rounded text-white mb-2 flex items-center gap-2"><img :src="product.image"
                    alt="" class="w-32 h-full outline outline-1 rounded-sm outline-black">{{
                        product.description }}</p>

            <p class=" price flex justify-end text-orange-300 bg-black rounded px-2">{{ product.price }}€</p>
        </div>
    </div>
</template>