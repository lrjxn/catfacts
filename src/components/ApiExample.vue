<template>
  <h1 class="is-size-1">{{ fact }}</h1>
</template>

<script>
const axios = require('axios');
export default {
    created(){
        axios.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat')
        .then(response => { 
            console.log(response.data);
            this.fact = response.data.text;
        });
    },
    data(){
        return {
            fact: ''
        }
    }
}
</script>

<style>

</style>