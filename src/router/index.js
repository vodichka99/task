import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Registration from "@/views/Registration.vue";
import Login from "@/views/Login.vue";
import UserPage from "@/views/UserPage.vue";
import DeletePage from "@/views/DeletePage.vue";
import EditAccount from "@/views/EditAccount.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/registration",
    name: "registration",
    component: Registration
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/userpage/:id",
    name: "userpage",
    component: UserPage
  },
  {
    path: "/userpage/:id/delete",
    name: "delete",
    component: DeletePage
  },
  {
    path: "/userpage/:id/edit",
    name: "edit",
    component: EditAccount
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
