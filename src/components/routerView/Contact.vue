<template>
<section id="wrapping" class="px-3">
    <div class="container text-primary mt-5 px-2" style="">
        <div class="row py-3">
            <div class="col-md-6 d-none d-md-block animated fadeInUpBig">
                <!-- img -->
                <div  id="grayscale" class="target-img transitionAnimated">
                    <h4 class="row target-img-text pl-3">
                      <p style="width: 100%; margin-top: 150px;">Let's</p>
                      <p style="width: 100%">Work</p>
                      <p style="width: 100%">Together</p>
                    </h4>
                </div>  
            </div>
            <div class="col-md-6 col-sm-12 animated fadeInDownBig whiteBg">
                <form class="form" role="form" autocomplete="off">
                    <div class="form-group row" v-for="(label, index) in label_array" :key="index">
                        <label class="col-lg-3 col-form-label form-control-label text-purple">{{ label }} :</label>
                        <div class="col-lg-9">
                            <input @focus="grayscaleRemove" class="form-control" :type="input_type_array[index]" :placeholder="placeholder_text_array[index]" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label form-control-label text-purple">Work Requirement :</label>
                        <div class="col-lg-9">
                            <textarea @focus="grayscaleRemove" name="Work Requirement - description"></textarea>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-lg-3 col-form-label form-control-label"></label>
                        <div class="col-lg-9">
                            <input type="button" class="btn btn-block button-outline-purple" value="Save Changes" style="color:white">
                            <input @click="grayscaleAdd" type="reset" class="btn btn-block btn-secondary" value="Cancel">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
  data: function() {
    return {
      label_array: ["First Name", "Last Name", "Email", "Company", "Website"],
      input_type_array: ["text", "text", "email", "text", "url"],
      placeholder_text_array: ["Jane", "Paul", "example@mail.com", "", ""]
    };
  },
  methods: {
    grayscaleRemove() {
      var temp = document.getElementById("grayscale");
      temp.classList.add("dynammicGrayscale_Remove");
    },
    grayscaleAdd(){
        var temp = document.getElementById("grayscale");
        temp.classList.remove("dynammicGrayscale_Remove");
        temp.classList.add("dynammicGrayscale_Add");
    }
  }
};
</script>

<style scoped>
#wrapping{
    background-image: linear-gradient(to top, #5f72bd 0%, #9b23ea 100%);
}
.target-img {
  background: url("https://images.unsplash.com/photo-1518600506278-4e8ef466b810?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=858391bd28bf4aadaa5b3e0750edb485&auto=format&fit=crop&w=693&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  filter: grayscale(100%);
}
.dynammicGrayscale_Add{
  filter: grayscale(100%);
}
.dynammicGrayscale_Remove,
.target-img:hover{
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.51);
  filter: grayscale(0);
}
.target-img-text {
  font-size: 50px;
  width: 100%;
  color: black;
}
.transitionAnimated{
  transition-duration: 0.5s;
}

.whiteBg{
    box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.3);
    background-color: #fff;
    padding-top: 50px;
}
.text-purple{
    color: #5C46AF;
}
.button-outline-purple{
  background: #5C46AF;
}
</style>
