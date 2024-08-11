import Cookies from "js-cookie";

const COOKIE_NAME = "my-cookie"; // Example cookie name

// Set a cookie
export const setCookie = (name: string, value: string, days?: number): void => {
  Cookies.set(name, value, { expires: days });
};

// Get a cookie
export const getCookie = (name: string): string | undefined => {
  return Cookies.get(name);
};

// Remove a cookie
export const removeCookie = (name: string): void => {
  Cookies.remove(name);
};
