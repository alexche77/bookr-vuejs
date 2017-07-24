<template>
  <div class="main" style="overflow: hidden">  
      <h1>Libros públicos</h1>
  </div>
</template>

<script>
export default {
  name: 'main',
  data: function () {
    return {
      counter: 0
    }
  },
  beforeCreate: function () {
    console.log('Trayendo los libros publicos de la base de datos');
  }
}
</script>
<style>
  .centrada {
    display: block;
    margin-left: auto;
    margin-right: auto }
</style>