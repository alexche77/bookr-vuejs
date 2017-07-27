<template>
  <div id="app">  	

  		<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header" v-bind:class="{'mdl-layout--fixed-tabs': inicioSesion }">
		  <header class="mdl-layout__header">
		    <div class="mdl-layout__header-row">		    
		    <router-link  class="mdl-layout-title" tag="span"  :to="{path: '/'}" exact>Bookr</router-link>		   	
		      <div class="mdl-layout-spacer"></div>		         
		      <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
		        <label class="mdl-button mdl-js-button mdl-button--icon" for="fixed-header-drawer-exp">
		          <i class="material-icons">search</i>
		        </label>
		        <div class="mdl-textfield__expandable-holder">
		          <input class="mdl-textfield__input" type="text" name="busqueda" id="fixed-header-drawer-exp">
		        </div>
		      </div>
		    </div>
		    <!-- Tabs -->
			    <div class="mdl-layout__tab-bar mdl-js-ripple-effect"  v-if="inicioSesion">
			     <router-link class="mdl-layout__tab " tag="a" :to="{path: '/libros'}" active-class="is-active" exact>Libros</router-link>   			      
			      <router-link class="mdl-layout__tab " tag="a" :to="{path: '/autores'}" active-class="is-active" exact>Autores</router-link>   
			      <router-link class="mdl-layout__tab " tag="a" :to="{path: '/tematicas'}" active-class="is-active" exact>Tematicas</router-link>   
			    </div>
		  </header>
		  <div class="mdl-layout__drawer">			  	     	
		    <nav class="mdl-navigation">			    	     
		      <router-link class="mdl-navigation__link" tag="a" :to="{path: '/login'}" active-class="is-active" exact>Iniciar sesión</router-link>   		      
		    </nav>
		  </div>
		  <main class="mdl-layout__content">
		    <div class="page-content"> <router-view></router-view></div>
		  </main>
		</div>		
  	<!-- Fin de la Navbar -->
   
  </div>
</template>

<script>	
var inicioSesion = false;
//Esta funcion cierra el drawer cuando se de click en un link de la lateral
document.addEventListener("DOMContentLoaded",function  (argument) {
		document.querySelector('.mdl-layout__drawer').addEventListener('click', function () {
	  document.querySelector('.mdl-layout__obfuscator').classList.remove('is-visible');
	  this.classList.remove('is-visible');
	}, false);
}, false);

export default {
  name: 'app',
  data: function () {
    return {
      inicioSesion: checkIfLoggedIn(),
    }
  },
  method:{
  	
  },
  created: function(){  	
  }
}

function checkIfLoggedIn () {
	//
	if(1){
		return true;
	}else{
		return false;
	}
}
</script>

