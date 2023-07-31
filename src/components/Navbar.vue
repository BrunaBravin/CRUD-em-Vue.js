<template>
  <div class="box">
    <div class="columns">
      <div class="column is-centered is-10">
      <nav id="nav" class="breadcrumb is-centered is-large" aria-label="breadcrumbs">
        <ul>
          <li>
            <router-link to="/">Página principal</router-link>
          </li>
          <li>
            <router-link to="/cadastro">Cadastros</router-link>
          </li>
        </ul>
      </nav>
      </div>
      <div class="column">
        <p class="control">
          <button class="button is-default is-link is-light">Login</button>  
        </p> 
      </div>
    </div>  
  </div>
</template>

<script>
  export default {
    name: "Navbar"
  }
</script>

<style scoped>
 .box{
  margin-bottom: 70%;
 }

 .button{
    border-radius: 12px;
    border-style: outset;
    padding: 20px 30px;
    font-weight: 400;
    box-shadow: 0px 2px #dfdfdf;
  }

</style>