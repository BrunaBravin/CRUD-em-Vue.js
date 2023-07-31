<script setup>
  import HeaderHome from "./components/HeaderHome.vue";
  import Navbar from "./components/Navbar.vue"
  import Footer from "./components/Footer.vue";
</script>


<template>
    <HeaderHome />
    <Navbar />
  <main>
      <router-view /> 
  </main>
    <Footer />
</template>

