<template>
  <div class="main" style="overflow: hidden">          
  </div>
</template>

<script>
import PublicBooks from './PublicBooks.vue'
export default {  
  name: 'Home',
 
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