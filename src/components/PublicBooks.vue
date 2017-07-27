<template>
  <div class="main" style="overflow: hidden">  
  
      <div class="columns">
      <div class="column is-half-desktop is-8-mobile is-half-tablet is-offset-2-mobile is-offset-3-tablet is-primary">
        <div class="box" style="background-color: #276CDA"><h1 class="title has-text-white-bis has-text-centered">Libros públicos</h1></div>
      </div>         
      </div>
      <div class="columns">
        <div class="column is-half-desktop is-8-mobile is-half-tablet is-offset-2-mobile is-offset-3-tablet borde">
         <ul v-if="libros && libros.length">
          <li v-for="libro of libros">
            
          <a>{{libro.titulo}}</a>          
            <!-- <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  {{libro.titulo}}
                </p>
                <a class="card-header-icon">
                  <span class="icon">
                    <i class="fa fa-bookmark"></i>
                  </span>
                </a>
              </header>
              <div class="card-content">              
                <div class="content">
                 <p class="wrap-text">{{libro.descripcion}}</p>                 
                  <small>Subido: {{libro.created_at}}</small>
                </div>
              </div>
              <footer class="card-footer">
                <a class="card-footer-item">Save</a>
                <a class="card-footer-item">Edit</a>
                <a class="card-footer-item">Delete</a>
              </footer>
            </div> -->
          </li>   
        </ul>         
      </div>                      
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'main',
  data: function () {
    return {
      libros: [],
      errors:[]
    }
  },
  created: function () {
    var config = {
      headers: {'Access-Control-Allow-Origin': '*'}
    };
    console.log('Trayendo los libros publicos de la base de datos');
    // GET /libros
    // axios.get('http://jsonplaceholder.typicode.com/posts')
    axios.get('http://localhost:8000/libros')
    .then(response => {
      // JSON responses are automatically parsed.
      this.libros = response.data      
    })
    .catch(e => {
      this.errors.push(e)
    })

    
  }
}
</script>
<style>
  .main{
    margin-top: 20px;
  }
  .card{
    margin-top: 20px;
  }
  .centrada {
    display: block;
    margin-left: auto;
    margin-right: auto }

    .wrap-text{      
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    display: block;
    overflow: hidden
    }
    .borde{
      border-color: gray;
      border-style: double;    
    }
</style>