//@ts-ignore

import { useState } from "nuxt/app";
import type { AuthUser } from "@/types/user";

export const useAuth = ()=>useState<AuthUser>('authUser', ()=>null);
