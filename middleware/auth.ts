// middleware/auth.js
import { useAuth } from "@/composables/useAuth";
import type { AuthUser } from "@/types/user";
import type { RouteLocationNormalized } from "vue-router";
import { navigateTo, defineNuxtRouteMiddleware } from "nuxt/app";

export default defineNuxtRouteMiddleware((to:RouteLocationNormalized, from:RouteLocationNormalized) => {
  const user = useAuth();
  if (!user.value) {
    if(to.path !== "/login"){
        return navigateTo("/login");
    }
  }
});
