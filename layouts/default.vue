<script setup>
const links = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Products',
        path: '/products'
    }
]
</script>

<template>
    <div>
        <header class="header mb-5">
            <nav class="nav z-40">
                <ul class="links text-slate-600 text-2xl flex gap-5 border-b border-red-600 py-2 px-5 bg-red-100">
                    <li v-for="(link, index) in links" :key="index"
                        class="link hover:outline outline-red-600 bg-white rounded px-2">
                        <NuxtLink :to="link.path">{{ link.name }}</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <div class="container bg-red-50">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.router-link-exact-active {
    @apply text-red-600
}
</style>