<template>
  <div>
    <navbar/>
      <router-view/>
    <footer-cmp/>
  </div>
</template>

<script>
  import navbarVue from "./components/navbar.vue";
  import footerVue from './components/footer.vue';
  
  export default {
    components: {
      navbar: navbarVue,
      footerCmp: footerVue
    }
  };
</script>
