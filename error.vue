
<script setup>
defineProps({ error: Object })

const handleClearError = () => {
    clearError({ redirect: '/' })
}
</script>

<template>
    <div>
        <h1 class="text-red-600 text-4xl bg-red-100 p-3 border-b border-red-600">{{ error.statusCode }}</h1>
        <p> {{ error.message }}</p>
        <button class="btn" @click="handleClearError">Go back</button>
    </div>
</template>