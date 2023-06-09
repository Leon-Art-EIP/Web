import { ITab } from "../interfaces";

const tabs: ITab[] = [
  {
    name: "Connexion",
    href: "/login",
    loggedIn: false,
  },
  {
    name: "Inscription",
    href: "/register",
    loggedIn: false,
  },
  {
    name: "Messages",
    href: "/messages",
    loggedIn: true,
  },
  {
    name: "Paramètres",
    href: "/parameters",
    loggedIn: true,
  },
  {
    name: "Profil",
    href: "/profile",
    loggedIn: true,
  },
  {
    name: "Publications",
    href: "/publications",
    loggedIn: true,
  },
  {
    name: "Achats",
    href: "/purchase",
    loggedIn: true,
  },
];

export default tabs;
