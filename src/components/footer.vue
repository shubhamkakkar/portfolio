<template>
    <div id="footer">
        <footer class="container">
            <div class="row pt-4">
                <div class="col-md-4 text-primary">
                    All rights reserved to Shubham Kakkar
                </div>
                <div class="col-md-2 offset-md-4">
                    <div v-if=" $route.path!= 'contact' ">
                        <router-link class="bold" :to="{ name: 'contact' }">
                            hire me
                        </router-link>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="text-primary bold" style=";">Follow Me</div>
                    <br>
                    <ul>
                        <li v-for="(classIcon,index) in classFontAwesomeIcon" :key="index">
                            <a :href="link[index]">
                                <i :class="classIcon" class="bold">
                                </i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
  data() {
    return {
      classFontAwesomeIcon: ["fab fa-facebook-f", "fab fa-linkedin-in"],
      link : ['https://www.facebook.com/shubham.kakkar1998', 'https://www.linkedin.com/in/shubham-kakkar-5b53b2158/']
    };
  }
};
</script>

<style scoped>

#footer{
  box-shadow: 2px 4px 20px rgba(0, 0, 0, 1);
  background-attachment: fixed;
  background-position: center;
  bottom: 0;
  position: relative
}
ul {
  padding: 0;
  display: -webkit-box;
  list-style: none;
}

li {
  margin-right: 25px;
}

i{
    font-size: 20px;
    padding: 10px;
    border-radius: 50%;
    transition-duration: 1s;
    border: 1px solid;
}

i:hover{
   color: black;
}


a{
    text-decoration: none;
    text-transform: uppercase;
}

.bold{
    font-weight: bold !important;

}
</style>
