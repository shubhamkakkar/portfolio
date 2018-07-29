<template>
<div id="wrapper" style="overflow:hidden">
    <section id="part-1" class="animated parralax d-none d-md-block mouseenterAnimate">
        <div class="row quote animated bounceIn"></div>
    </section>
    <section id="part-2" class="mouseenterAnimate">
        <div class="container py-5 displayNone animated">
            <div class="row text-center">
                <h3 class="col-md-8 display-4" style="color: #7752CF">
                    <div> Hey, my name is
                        <p style="color:black">{{ name }}.</p>
                    </div>
                    <div>I am a
                        <p>
                            <vue-typer :text=profile></vue-typer>
                        </p>
                    </div>
                </h3>
                <!-- Would highly recommend changing the grid system as per the name and  profile -->
                <div class="col-md-4 d-none d-md-block">
                    <div class="avatar transitionDuration"></div>
                    <!-- border-radius : 50%; -->
                </div>
            </div>
        </div>
    </section>
    <section id="part-3" class="mouseenterAnimate">
        <div class="container displayNone animated">
            <div class="row my-5">
                <div class="col text-center">
                    <h3 class="display-3 heading"> Skill Set </h3>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4 mb-3" v-for="(skill, index) in skillsCard.skills" :key="index">
                    <div class="card border-0">
                        <div class="card-body text-center">
                            <h5 class="card-tittle">
                                {{ skill }}
                                <!-- if you want to add more skills add them in the data(){ .. } inside the card-data obj -->
                            </h5>
                            <div class="row">
                                <!-- animated cards with hover effect -->
                                <div class="col-md-8 offset-md-2">
                                    <div class="card-text">
                                        <p class="exp text-info"> #{{ skillsCard.experianceYear[index] }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="part-4" class="mouseenterAnimate">
        <div class="container displayNone animated">
            <div class="row my-5">
                <h3 class="col-sm-10 offset-sm-1 text-center heading display-3 text-warning" style="letter-spacing:2px">
                    My Best
                </h3>
            </div>
            <div class="row" style="justify-content: center">
                <div class="col-sm-3 my-3" v-for="(work,index) in workPrevious" :key="index">
                    <div class="card text-center border-0 hoverEffect transitionAnimated" style="background-color: #F7F7F7;height: 340px;">
                        <div class="card-body">
                            <div class="card-title text-info my-3">
                                <h3>
                                    {{ work.title }}
                                </h3>
                            </div>
                            <div class="card-subtitle  text-justify">
                                {{ work.description }}
                            </div>
                        </div>
                        <div class="card-footer">
                           <a :href=work.githubLink target="_blank" class="btn btn-block button-outline-purple">
                                See on
                                <i class="fab fa-github"></i>
                            </a>     
                        </div>    
                    </div>
                </div>
            </div>
            <hr>
            <div class="row text-center pb-5">
                    <div class="offset-md-4 col-md-4">
                        <a href="https://github.com/shubhamkakkar" target="_blank">
                                <i class="fab fa-github"> Github</i>
                        </a>
                    </div>
                    <div class="col-md-4">
                        <router-link :to="{ name: 'portfolio' }" style="text-decoration: none"> 
                                Work Preview Page
                        </router-link>
                    </div>
                </div>
            </div>
    </section>
</div>
</template>

<script>
import { VueTyper } from "vue-typer";
import { animateMixin } from "../Globalfunction.js"
export default {
  data() {
    return {
      homeQuotation: "Built My Way",
      name: "Shubham Kakkar",
      profile: "Front-End Developer",

      skillsCard: {
        skills: [
          "HTML",
          "CSS",
          "Vanilla JS",
          "jQuery",
          "AJAX",
          "Bootstrap-3/4",
          "Sementic UI",
          "Vue.js(Vuex & Vue-router)",
          "Vue-Resource & Axios"
        ],
        experianceYear: [
          "2 years",
          "2 years",
          "2 years",
          "2 years",
          "2 years",
          "2 years",
          "0.5 years",
          "1 years",
          "1 years"
        ]
      },

      conditionBool_profile: false,
      star: false,
      active: false,
      // star is responsible to add ** to vue's card and boostrap's at top-right  -> my best

      workPrevious: {
        1: {
          prevImage: "",
          title: "Vue Quiz",
          description:
            "This is a quiz/question Bank where I have put a few questions based on vue.js, which I beieve are among the core concepts of vue.js and every vue-deveoper must have firm hold over these.",
          githubLink: "https://github.com/shubhamkakkar/vue-Quiz"
        },
        2: {
          prevImage: "",
          title: "Website Clone",
          description:
            "A Website Clone, a self test on my skills : HTML5, CSS3, Vanilla JS, Bootstrap-4, jQuery",
          githubLink:
            "https://github.com/shubhamkakkar/htmlCssJsJQueryBootstrap-WebsieCloneFreshii"
        }
        // add more!!
        // ,
        // 3: {
        //   prevImage: "",
        //   title: "",
        //   description: "",
        //   githubLink: ""
        // }
      }
    };
  },
  components: {
    VueTyper
  },
  mounted() {
    var sample_cmp = document.getElementsByClassName("mouseenterAnimate");
    this.mouseenterFadeInTarget(sample_cmp)    
  },
  mixins: [ animateMixin ]
};
</script>

<style scoped>
.displayNone {
  visibility: hidden;
}
@media screen (min-width: 1000px) {
  #part-2 {
    height: 100vh;
  }
}

.transitionDuration {
  transition-duration: 1s;
}

#part-1 .quote {
  background: url("../../assets/images/homeQuote.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  background-position: center;
}

.parralax {
  background: url("../../assets/images/home.png");
  background-attachment: fixed;
  background-size: contain;
  background-position: center;
  height: 100vh;
  background-repeat: no-repeat;
}

.cardHover:hover {
  transform: scale(1.1);
}
.heading {
  color: blueviolet;
  border-bottom: 2px solid;
}

#part-2 {
  background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);
  padding-top: 10%;
}
.avatar {
  background-image: url("../../assets/images/shubham.jpg");
  border: 2px solid white;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
}
.avatar:hover {
  border-radius: 20px;
}
#part-3 .card,
#part-4 .card {
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  transition-duration: 0.5s;
}

#part-3 .card:hover {
  transform: scale(0.95);
}

#part-4 {
  background-image: linear-gradient(to top, #88d3ce 0%, #6e45e2 100%);
}
#part-4 .extendedReference {
  background: white;
}

#part-4 .extendedReference:hover {
  background: white;
  color: teal;
  box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.3);
  transition-duration: 0.4s;
}

.button-outline-purple {
  color: #5c46af;
  border: 2px solid #5c46af;
  transition-duration: 0.5s;
}

.button-outline-purple:hover {
  background: #5c46af;
  color: white;
}

.card-footer {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: 0;
}
</style>

