<template>
  <div class="main" >  
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--6-col mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--3-offset-desktop">
        <div class="mdl-card mdl-shadow--4dp" style="width:100%">
          <div class="mdl-card__title">
            <h1 class="mdl-card__title-text centrada">Inicio de sesión</h1>
          </div>  
          <div class="mdl-card__supporting-text">
            <form action="login">
                  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width:100%;">
                    <input class="mdl-textfield__input" type="email" v-model="correo">
                    <label class="mdl-textfield__label" for="correoInput">Correo</label>
                  </div>
                   <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style="width:100%;">
                    <input class="mdl-textfield__input" type="password" v-model="password">
                    <label class="mdl-textfield__label" for="passwordInput">Contraseña</label>
                  </div>
                </form>
          </div>
          <div class="mdl-card__actions">
            <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" v-on:click="login">
              Login
            </button>
          </div>
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
      correo: "",
      password:"",
    }
  },
   methods: {
    login: function () {
      console.log(this.correo, this.password);
    }
  },
}
</script>
<style>
  
</style>