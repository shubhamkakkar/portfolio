<template>
<section id="wrapping">
    <div class="py-3" v-for="(sample,index) in workSamples" :key="index">
        <div class="container WhiteBg">
            <div class="row mt-5 mx-3 py-3 displayNone animated">
                <div class="col-md-6 animated" :class=" {'order-2': index%2}">
                    <div class="row">
                        <div class="col text-center">
                            <h4 class="text-info"> {{ sample.title }} </h4>
                            <p>
                                <u> DESCRIPTION:</u>
                                <span> {{ sample.description }}</span>
                            </p>
                            <a :href=sample.github_link target="_blank" class="btn btn-block button-outline-purple" style="color:white">
                                <span>See on </span>
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 d-none d-md-block animated">
                    <div class="card border-0">
                        <div class="card-img">
                          <a :href=sample.github_link target="_blank" style="text-decoration: none">
                            <i class="fab fa-github" style="font-size:150px; text-align: center; display: block"></i>
                          </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import { animateMixin } from '../Globalfunction';
export default {
  data: function() {
    return {
      workSamples: {
        1: {
          title: "Vue Quiz",
          description:
            "A quiz based on concepts of vue.js, which I beleive are very vital and a vue-developer must have a firm understanding of..",
          img: "",
          github_link: "https://github.com/shubhamkakkar/vue-Quiz"
        },
        2: {
          title: "Vue Navbar Component",
          description:
            "A navigation bar component(under development), with pre-router setup & folder structure,thus saving much of time",
          img: "",
          github_link: "https://github.com/shubhamkakkar/vue-navbarCompoent"
        },
        3: {
          title: "Vue Harry Potter",
          description: "My First ever vue project, my test after learing vue.",
          img: "",
          github_link: "https://github.com/shubhamkakkar/vue-HarryPotter"
        },
        4: {
          title: "Vue Todo List",
          description:
            "A non UI/UX todo app's front end, data flow ensured using slots,props and event bus",
          img: "",
          github_link: "https://github.com/shubhamkakkar/vue-TodoList"
        },
        5: {
          title: "Item Description Template",
          description:
            "A bootstrap based template for describing an item completely (Testing my bootstrap learning)",
          img: "",
          github_link:
            "https://github.com/shubhamkakkar/Bootstrap-ThemeItemDescription"
        },
        6: {
          title: "Calculator",
          description:
            "A calculator designed using HTML,CSS, Vanilla JS & jQuery (Testing my CSS and Javascript skills)",
          img: "",
          github_link:
            "https://github.com/shubhamkakkar/htmlCssJsJQuery-Calculator"
        },
        7: {
          title: "Anchored Tabs",
          description:
            "A tabular structure, I designed for my college fest's website desiging, not that good in UI/UX, it is just a prototype, can be used vividly",
          img: "",
          github_link: "https://github.com/shubhamkakkar/htmlCss-AnchoredTabs"
        }
      }
    };
  },
  mounted() {
    let sample_cmp = document.getElementsByClassName("WhiteBg");
    this.mouseenterFadeInTarget(sample_cmp)
  },
  mixins: [animateMixin]
};
</script>

<style scoped>
#wrapping {
  background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
}
.displayNone {
  /* background: red; */
  visibility: hidden;
}
.WhiteBg {
  background: white;
  box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.3);
  transition-duration: 1s;
}
.button-outline-purple {
  border: 2px solid #5c46af;
  color: black !important;
}

.button-outline-purple:hover {
  background: #5c46af;
  color: white !important;
}
</style>
