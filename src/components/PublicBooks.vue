<template>
  <div class="main" style="overflow: hidden">  
      <h1>Libros públicos</h1>
      <ul v-if="libros && libros.length">
        <div class="columns is-mobile">
          <div class="column is-half-desktop is-half-mobile is-offset-3-mobile">
          <li v-for="libro of libros">
            <div class="card">
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
                  <p style="white-space: nowrap;">{{libro.descripcion}}</p>
                  <small>Subido: {{libro.created_at}}</small>
                </div>
              </div>
              <footer class="card-footer">
                <a class="card-footer-item">Save</a>
                <a class="card-footer-item">Edit</a>
                <a class="card-footer-item">Delete</a>
              </footer>
            </div>
          </li>
         
          </div>
        </div>            
      </ul>
      
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
  .centrada {
    display: block;
    margin-left: auto;
    margin-right: auto }
</style>