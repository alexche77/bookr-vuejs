<template>
  <div id="app">  
	<nav class="navbar ">
  <div class="navbar-brand">
    <router-link class="navbar-item" :to="{path: '/'}" exact>
      <img src="./assets/logo.png" alt="Bookr: Plataforma para compartir libros">
      Bookr
    </router-link>
    <div class="navbar-burger burger" data-target="navMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navMenu" class="navbar-menu">
    <div class="navbar-start">    
    <router-link class="navbar-item" exact-active-class="is-active" :to="{path: '/libros'}" exact>Libros</router-link>            
    </div>

    <div class="navbar-end">     
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <router-link class="button"
             to="/register">
              <span class="icon">
                <i class="fa fa-vcard-o"></i>
              </span>
              <span>Registrarse</span>
            </router-link>
          </p>
          <p class="control">
            <router-link class="button is-primary" :to="{path: '/login'}">
              <span class="icon">
                <i class="fa fa-user"></i>
              </span>
              <span>Acceder</span>
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
  	<!-- Fin de la Navbar -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app', 
}


</script>

<style lang="css">
    @import "../node_modules/bulma/css/bulma.css";
</style>
