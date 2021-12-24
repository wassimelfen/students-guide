import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";
import courses from "./components/courses.vue"
import editP from "./components/editProfil.vue";
import profile from "./components/profile.vue";
import TeacherPost from "./components/Teacher-Post.vue";
import teacherChangePassword from "./components/changePass.vue";
import studentChangePassword from "./components/studentChangePassword.vue";
import signin from "./components/signin.vue";

import Mypannel from "./components/Mypannel.vue"
Vue.use(Router);
var router = new Router({
  mode: "history",

  routes: [
    {
      path: "/edit",
      name: "edit",

      component: editP
    },
    {

      path: '/mypannel', 
      name:'mypannel',
      
      component: Mypannel
    },
    {
      path: "/profil",
      name: "profil",
      component: profile
    },
    {
      path: "/",
      name: "courses",
      component: courses
    },
      { 
    path: '/teacherChangePass', 
    name:'teacherChangePassword',
    component: teacherChangePassword
  },
  {
    path: '/studentChangePass', 
    name:'studentChangePassword',
    component: studentChangePassword
  },
  { 
    path: '/signin',
    name :'signin' ,
    component:signin
  },

      {
        path: '/post', 
      name:'post',
      
      component: TeacherPost
    },
    {
      path: "/teacherChangePass",
      name: "teacherChangePassword",
      component: teacherChangePassword
    }
  ]
});

new Vue({
  router,
  el: "#app",
  render: h => h(App)
});
