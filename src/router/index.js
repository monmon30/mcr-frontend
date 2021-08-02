import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PatientIndex from "../views/PatientIndex.vue";
import PatientCreate from "../views/PatientCreate.vue";

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
    children: [
      {
        path: "index",
        component: PatientIndex,
        name: "admin.index.patient",
      },
      {
        path: "create",
        component: PatientCreate,
        name: "admin.create.patient",
      },
    ],
  },

  {
    path: "/dashboard/doctor",
    name: "Doctor",
    component: () =>
      import(/* webpackChunkName: "doctor" */ "../views/Doctor.vue"),
    children: [
      {
        path: "index",
        component: PatientIndex,
        name: "doctor.index.patient",
      },
      {
        path: "create",
        component: PatientCreate,
        name: "doctor.create.patient",
      },
    ],
  },

  {
    path: "/dashboard/staff",
    name: "Staff",
    component: () =>
      import(/* webpackChunkName: "staff" */ "../views/Staff.vue"),
    children: [
      {
        path: "index",
        component: PatientIndex,
        name: "staff.index.patient",
      },
      {
        path: "create",
        component: PatientCreate,
        name: "staff.create.patient",
      },
    ],
  },

  {
    path: "/dashboard/patient",
    name: "Patient",
    component: () =>
      import(/* webpackChunkName: "patient" */ "../views/Patient.vue"),
  },

  {
    path: "/logout",
    name: "Logout",
    component: () =>
      import(/* webpackChunkName: "logout" */ "../views/Logout.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
