"use server";

import { cookies } from "next/headers";
import type { Theme } from "@/types/types";

/**
 * Set the theme cookie on the server
 */
export async function setThemeCookie(theme: Theme) {
  const cookieStore = await cookies();
  cookieStore.set({
    name: "theme",
    value: theme,
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
  });
}

/**
 * Get the theme from server-side cookies
 */
export async function getThemeFromCookie(): Promise<Theme> {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get("theme");
  return (themeCookie?.value as Theme) || "light";
}
