import { atom } from "recoil";

export const isLoggedIn = atom({
  key: "isLoggedIn", // ID unique
  default: false, // valeur par défaut
});
