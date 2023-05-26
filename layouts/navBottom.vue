<script setup>
const links = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    }
]
</script>

<template>
    <div>
        <header>
            <nav class="merch-link text-2xl  bg-red-100 border-b border-red-600 py-2">
                <NuxtLink to="/products" class="hover:outline outline-red-600 text-red-600 rounded bg-white px-2 m-5">Nuxt
                    Dojo Products</NuxtLink>
            </nav>
        </header>

        <footer>
            <ul
                class="links text-slate-600 text-2xl flex gap-5 border-t border-red-600 py-2 px-5 bg-red-100 border-b border-red-600">
                <li v-for="(link, index) in links" :key="index"
                    class="link hover:outline outline-red-600 bg-white rounded px-2">
                    <NuxtLink :to="link.path">{{ link.name }}</NuxtLink>
                </li>
            </ul>
        </footer>
        <div class="container bg-red-50">
            <slot />
        </div>
    </div>
</template>