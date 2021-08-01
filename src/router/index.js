import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/redirect",
    name: "Redirect",
    component: () =>
      import(/* webpackChunkName: "redirect" */ "../views/Redirect.vue"),
  },

  {
    path: "/dashboard/admin",
    name: "Admin",
    component: () =>
      import(/* webpackChunkName: "admin" */ "../views/Admin.vue"),
  },

  {
    path: "/dashboard/physician",
    name: "Physician",
    component: () =>
      import(/* webpackChunkName: "physician" */ "../views/Physician.vue"),
  },

  {
    path: "/dashboard/encoder",
    name: "Encoder",
    component: () =>
      import(/* webpackChunkName: "encoder" */ "../views/Encoder.vue"),
  },

  {
    path: "/dashboard/patient",
    name: "Patient",
    component: () =>
      import(/* webpackChunkName: "patient" */ "../views/Patient.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
