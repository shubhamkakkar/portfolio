<template>
    <nav class="navbar navbar-expand-md fixed-top">
        <div class="container-fluid">
            <div class="navbar-header animated bounceInRight navbar-light">
                <a class="navbar-brand text-primary" href="/">{{ brand }}</a>
                <button class="navbar-toggler float-right" type="button" data-toggle="collapse" 
                data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon text-primary"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="nav navbar-nav animated fadeInDown ml-auto">
                   <li v-for="(NameRoute,index) in NameRoutes" :key="index" class="w-auto mx-5">
                       <router-link :to="{ name : NameRoute }">{{ Names[index]}}
                       </router-link>
                   </li>
                </ul>
            </div>
            <!-- /navbar-collapse -->
        </div>
        <!-- /container-fluid -->
    </nav>
</template>
<script>
export default {
  data() {
    return {
      brand: 'SHUBHAM KAKKAR', //prefer to put name in caps
      NameRoutes: ["portfolio", "about", "contact"],
      Names: ["My Work", "About Me", "Contact"]
    };
  },
  methods:{
      ZoomInAnimation: function(){
        console.log('animated')
      }
  }
};
</script>

<style scoped>
.navbar{
  box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.3);
  background: white;
}
</style>
