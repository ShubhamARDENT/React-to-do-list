import { createContext } from "react";

export const Api = "https://dummyjson.com/products";

export const UserData = createContext({
  name: "default",
  age: 23,
  location: "mumbai",
});
