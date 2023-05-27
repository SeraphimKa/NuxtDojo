


<template>
    <h2> About </h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore mollitia, cum soluta qui suscipit ut reiciendis
        fugit
        optio quae. Unde animi nihil magni nulla modi omnis, quod impedit blanditiis nam autem numquam aliquid laboriosam
        neque
        magnam veniam vel, earum ipsum maiores eum iure assumenda saepe. Sunt voluptatibus reprehenderit voluptatem dicta.
    </p>
    <div class="random-word" style="text-shadow: 2px 2px 4px rgb(47, 0, 255);">Random word: <span
            class="api-data text-red-600">{{
                data[0] }}</span></div>
</template>

<script setup>
const { data } = await useFetch('/api/word');
</script>