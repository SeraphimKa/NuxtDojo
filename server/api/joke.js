export default defineEventHandler(async (event) => {

    const { jokeApiKey } = useRuntimeConfig()
    //get random joke
    const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': jokeApiKey,
        'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
      }
    };
    

    const data = await $fetch(url, options);
    console.log(data)
    return data
})