


<template>
    <h2> About </h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore mollitia, cum soluta qui suscipit ut reiciendis
        fugit
        optio quae. Unde animi nihil magni nulla modi omnis, quod impedit blanditiis nam autem numquam aliquid laboriosam
        neque
        magnam veniam vel, earum ipsum maiores eum iure assumenda saepe. Sunt voluptatibus reprehenderit voluptatem dicta.
    </p>
    <div class="api-data">Random word: {{ data[0] }}</div>
</template>

<script setup>
const { data } = await useFetch('/api/ninja');
</script>