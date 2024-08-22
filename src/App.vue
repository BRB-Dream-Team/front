<script setup>
import MainContainer from './components/MainContainer.vue'
import Navbar from './components/Navbar.vue'
import Gallery from './components/Gallery.vue'
import Footer from './components/Footer.vue'
</script>

<template>

  <navbar>
  <Navbar />
  </navbar>

  <header>
    
    <MainContainer />

  </header>



  <main>
   <Gallery />
  </main>

  <footer>
  <Footer />
  </footer>
</template>

<style scoped>

</style>
