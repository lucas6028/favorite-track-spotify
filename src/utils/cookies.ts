import Cookies from "js-cookie";

// const COOKIE_NAME = "my-cookie"; // Example cookie name

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

// Set a cookie that expires in one hour
export const setCookieForOneHour = (name: string, value: string): void => {
  const expireDate = new Date();
  expireDate.setTime(expireDate.getTime() + 60 * 60 * 1000); // 60 minutes * 60 seconds * 1000 milliseconds
  Cookies.set(name, value, { expires: expireDate });
};

// Check if a cookie exists (and therefore has not expired)
export const isCookieExpired = (name: string): boolean => {
  const cookieValue = Cookies.get(name);
  return !cookieValue; // Returns true if the cookie does not exist (i.e., it has expired or was never set)
};
