import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Reports from "../components/Reports.vue";
import Appointments from "../components/Appointments.vue";
import RateList from "../components/RateList.vue";
import Packages from "../components/Packages.vue";
import RatesServices from "../views/RatesService.vue";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: () =>
      import("../views/Landing.vue")
  },
  {
    path: "/rs",
    name: "RatesPackages",
    component: RatesServices
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        name: "Reports",
        path: "reports",
        component: Reports,
        meta: {
          tabIndex: 1
        }
      },
      {
        name: "Appointments",
        path: "appointments",
        component: Appointments,
        meta: {
          tabIndex: 2
        }
      },
      {
        name: "RateList",
        path: "ratelist",
        component: RateList,
        meta: {
          tabIndex: 3
        }
      },
      {
        name: "Packages",
        path: "packages",
        component: Packages,
        meta: {
          tabIndex: 4
        }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
