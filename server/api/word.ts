export default defineEventHandler(async (event) => {
    //get random word
    const data = await $fetch('https://random-word-api.herokuapp.com/word?number=1')

    return data
})