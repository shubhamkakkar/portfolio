<template>
<section id="wrapper" class="px-3">
    <div class="container pt-5">
        <div class="row">
            <div class="col-md-6 d-none d-md-block animated fadeInRight">
                <img src="" alt="MyImage">
            </div>
            <div class="col-md-6 animated fadeInLeft wrapper">
                <div class="row customDesign">
                    <div class="container">
                        <div class="row py-2 heading">
                            Professional Experiance
                        </div>
                        <div class="container">
                            <div class="row">
                            <div class="col" id="professionalExp-Internship">
                                <div v-for="(professionalExpInternship, index) in professionalExperianceInternship" :key="index">
                                    <div class="row pt-3">
                                        <div class="col-3 offset-6" id="from" style="text-align:right"> {{ professionalExpInternship.from }} </div>
                                        <div class="col-3" id="to" style="text-align:right"> {{ professionalExpInternship.to }} </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-8" id="company_name">
                                            {{ professionalExpInternship.company_name }}
                                        </div>
                                        <div class="col-sm-4" id="location">
                                            {{ professionalExpInternship.location }}
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col" id="profile">
                                            {{ professionalExpInternship.pr_profile }}
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col text-center pt-2" id="work_Description">
                                            {{ professionalExpInternship.work_Description }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                </div>
                <div class="row customDesign">
                    <div class="row py-2 heading">
                        College
                    </div>
                    <div class="col" id="EdCollege">
                        <div v-for="(EdCollege, index) in Higher_Education" :key="index">
                            <div class="row  pt-3">
                                <div class="col-3 offset-6" id="from" style="text-align:right"> {{ EdCollege.from}} </div>
                                <div class="col-3" id="to" style="text-align:right">{{ EdCollege.to }} </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-8" id="college_name">
                                    {{ EdCollege.college_name }}
                                </div>
                                <div class="col-sm-4" id="location_college">
                                    {{ EdCollege.location }}
                                </div>
                            </div>
                            <div class="row">
                                <div class="col" id="college_course">
                                    Course : {{ EdCollege.college_course }}
                                </div>
                            </div>
                            <div class="row">
                                <div class="col" id="college_percentage">
                                    Score : {{ EdCollege.percentage }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row customDesign">
                    <div class="row py-2 heading">
                        School
                    </div>
                    <div class="col" id="EdSchool">
                        <div v-for="(EdSchool, index) in School_Education" :key="index">
                            <div class="row pt-3">
                                <div class="col" id="school_education">
                                    {{ EdSchool.school_education }}
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6 offset-6 text-right" id="to">Passing Year {{ EdSchool.to }} </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-8" id="school_name">
                                    {{ EdSchool.school_name }}
                                </div>
                                <div class="col-sm-4" id="location_school">
                                    {{ EdSchool.location }}
                                </div>
                                <div class="col-sm-4" id="percentage_School">
                                    Score: {{ EdSchool.percentage }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row customDesign" style="margin-bottom:0 !important;">
                    <div class="row py-2 heading" style="width:100%;margin:auto">
                        Miscellaneous
                    </div>
                    <div class="col" id="miscellaneous">
                        <ul class=" pt-3">
                            <li v-for="(misc,key) in miscellaneous">
                                {{ key }} - {{ misc }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
  data: function() {
    return {
      email: "Shubham.kakkar98@gmail.com",
      number: 1234567890,
      professionalExperianceInternship: {
        // all the elements are array as there is possibility of person having more exoeriance
        1: {
          from: "11/06/18",
          to: "15/08/18", // 'present'
          company_name: "HIRATION",
          location: "NEW DELHI",
          pr_profile: "Web Developer",
          work_Description:"Mainataining and Designing of website, making of resume templates and portfolio website templates"
        }
        /*
        ,
        // define more objects if there are more experiance, one has been done for you
        2: {
          from: "dd/mm/yy",
          to: "dd/mm/yy", // 'present'
          company_name: "XYZ",
          location: "city/state",
          pr_profile: "webDeveoper",
          workDescription:
            "Mainataining and Designing of" + this.company_name + "'s  website"
        }
        */
      },
      Higher_Education: {
        1: {
          from: "2017",
          to: "2021", // 'present'
          college_name: "Maharaja Agrasen Institute of Technology",
          location: "NEW DELHI",
          college_course: "Computer Science Engineering",
          percentage: "80%"
        }
        /*
        ,
        // define more objects if there are more colleges you went through during your college tenure, one has been done for you
        2: {
          from: "dd/mm/yy",
          to: "dd/mm/yy", // 'present'
          college_name: "XYZ",
          location: "city/state",
          college_course: 'Masters in Cloud Computing'
        }
        */
      },
      School_Education: {
        1: {
          to: "2017", // 'present'
          school_name: "Lovely Public Sr. Sec. School",
          location: "NEW DELHI",
          school_education: "Higer Secondary",
          percentage: "91%"
        },       
        2: {
          to: "2015", // 'present'
          school_name: "Lovely Public Sr. Sec. School",
          location: "NEW DELHI",
          school_education: 'Senior Secondary',
          percentage: '10 CGPA'
        }
        /*
        // define more objects if there are more schools you went through during your school tenure, one has been done for you
        */
      },
   
      miscellaneous: {
              Nonschoolistic : `Actor, Anchor(English), Poet(English, Hindi)`,
              Achievements : `2nd Runner Up in Esya-16, 1st Runner Up in English Debate(state), Won several Street Plays`,
              Hobbies: 'Reading Fantasy Comics and books, Cooking'
      }
    };
  }
};
</script>

<style scoped>
#wrapper{
    background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
    padding-top:5%; 
    padding-bottom:1%;
}
.customDesign{
    padding-bottom: 3%;
    padding-top: 3%;
    border-bottom: 1px solid black !important;
}
.wrapper{
    background: white; 
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
     
}

.heading{
   text-decoration: underline;
   text-transform: uppercase;
   justify-content: center;
   margin: auto;
   width: 100%;
   color: teal
}

#from,
#to{
    color: red;
}

#company_name{
    color: blue
}

#profile{
    color: royalblue;
}

</style>
