export const animateMixin = {
  methods:{
    mouseenterFadeInTarget(sample_cmp){
      for (var i = 0; i < sample_cmp.length; i++) {
        this.animate(sample_cmp[i]);
      }
    },
    animate(sample) {
      sample.addEventListener("mouseenter", function() {
        sample.firstChild.classList.remove("displayNone");
        sample.firstChild.classList.add("fadeIn");
      });
    }
  }
}
