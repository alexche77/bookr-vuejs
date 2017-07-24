<template>
  <div class="main" style="overflow: hidden">  
        <h1>Home Page</h1>
        <hr>        
        <listaLibros></listaLibros>  
  </div>
</template>

<script>
import PublicBooks from './PublicBooks.vue'
export default {  
  name: 'Home',
  components:{
    'listaLibros': PublicBooks
  },
  data: function () {
    return {
      counter: 0
    }
  },
   methods: {
    login: function () {
      console.log('Hola');
    }
  },
}
</script>
<style>
  .centrada {
    display: block;
    margin-left: auto;
    margin-right: auto }
</style>