<template>
  <div class="main" style="overflow: hidden">  
    <div class="colums">
      <div class="column is-one-third-desktop is-offset-one-third-desktop">            
          <img class="image is-128x128 is-clearfix centrada" src="../assets/logo.png">    
          <h1 class="title is-1 has-text-centered">Bookr</h1> 

      </div>  
    </div>
     <div class="columns is-mobile">     
         <!-- Campo username -->
          <div class="column is-half-mobile is-half-tablet is-one-third-desktop is-offset-one-third-desktop is-offset-one-quarter-mobile is-offset-one-quarter-tablet">
              <div class="field">          
                <div class="control has-icons-left">
                  <input class="input" type="text" placeholder="Usuario">
                  <span class="icon is-small is-left">
                    <i class="fa fa-user"></i>
                  </span>
                </div>        
            </div>
             <!-- Campo password -->
             <div class="field">          
                <div class="control has-icons-left">
                  <input class="input" type="text" placeholder="Contraseña">
                  <span class="icon is-small is-left">
                    <i class="fa fa-key"></i>
                  </span>          
                </div>        
            </div>
            <!-- Boton login -->
            <div class="field">
              <p class="control">
                <button class="button is-success is-fullwidth" @click="login()">
                  Login
                </button>
              </p>
            </div>
          </div>
       </div>
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