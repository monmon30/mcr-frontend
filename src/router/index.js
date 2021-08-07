import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PatientIndex from "../views/PatientIndex.vue";
import PatientCreate from "../views/PatientCreate.vue";
import Appointment from "../views/Appointment.vue";
import PatientProfile from "../views/PatientProfile.vue";
import PatientAppointmentCreate from "../views/PatientAppointmentCreate.vue";
import PatientAppointments from "../views/PatientAppointments.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/patient/auth",
    name: "patient.login",
    component: () =>
      import(
        /* webpackChunkName: "patient/auth" */ "../views/PatientLogin.vue"
      ),
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
      {
        path: "appointments",
        component: Appointment,
        name: "admin.index.appointment",
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
      {
        path: "appointments",
        component: Appointment,
        name: "doctor.index.appointment",
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
    children: [
      {
        path: "profile",
        component: PatientProfile,
        name: "patient.profile",
      },
      {
        path: "appointment/create",
        component: PatientAppointmentCreate,
        name: "patient.create.appointment",
      },
      {
        path: "appointment/",
        component: PatientAppointments,
        name: "patient.index.appointment",
      },
    ],
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
