import Vue from "vue";
import Router from "vue-router";

const Login = resolve => require(["../page/Login.vue"], resolve);
const Register = resolve => require(["../page/Register.vue"], resolve);

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    }
  ]
});

export default router;