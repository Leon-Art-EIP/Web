"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import zxcvbn from 'zxcvbn';
import Gallery from "../../components/gallery";
import { IError, ISuccess } from "../../interfaces";
import { isLoggedIn } from "../../recoil/SetupRecoil";
import "./page.css";

interface IBaseFormValues {
  username: string;
  email: string;
  password: string;
  conscent: boolean;
}

export default function Page(): JSX.Element {
  const router = useRouter();
  const [disableRegister, setDisableRegister] = useState(false);
  const setLoggedIn = useSetRecoilState(isLoggedIn);

  const [error, setError] = useState("");

  function validateForm({ username, email, password, conscent }: IBaseFormValues) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!username || !email || !password) {
      setError("Veuillez remplir tous les champs.");
      setDisableRegister(true);
      return false;
    } else if (!emailRegex.test(email)) {
      setError("Adresse email invalide.");
      setDisableRegister(true);
      return false;
    } else if (username.length > 20) {
      setError("Nom d'utilisateur invalide.");
      setDisableRegister(true);
      return false;
    } else if (zxcvbn(password).score < 3) {
      setError("Mot de passe invalide.");
      setDisableRegister(true);
      return false;
    } else if (!conscent) {
      setError("Veuillez accepter les conditions d'utilisation.");
      setDisableRegister(true);
      return false;
    }
    setDisableRegister(false);
    return true;
  }

  const handleInputChange = () => {
    setError("");
    setDisableRegister(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      validateForm({
        username: event.currentTarget.username.value,
        email: event.currentTarget.email.value,
        password: event.currentTarget.password.value,
        conscent: event.currentTarget.conscent.checked,
      })
    ) {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: event.currentTarget.username.value,
          email: event.currentTarget.email.value,
          password: event.currentTarget.password.value,
        }),
      });
      const data = (await response.json()) as ISuccess | IError;
      if ("token" in data) {
        const token = data.token;
        console.log("token", token);
        localStorage.setItem("token", token);
        setLoggedIn(true);
        router.push("/");
      } else {
        setError(data.errors[0].msg);
      }
    }
  };

  return (
    <div className="flex h-screen">
      <div className="left-side h-screen w-1/3 flex flex-col items-center justify-center fixed">
        <label className="text-5xl font-extrabold"> S'enregistrer</label>
        <form className="flex flex-col gap-8 w-4/6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            className="register-text-field"
            placeholder="Nom d'utilisateur"
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            className="register-text-field"
            placeholder="Adresse email"
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            className="register-text-field"
            placeholder="Mot de passe"
            onChange={handleInputChange}
          />
          <div className="flex flex-row">
            <input
              type="checkbox"
              name="conscent"
              onChange={handleInputChange}
            />
            <label htmlFor="terms" className="text-sm font-normal w-11/12 text-center">
              En vous enregistrant, vous acceptez les{" "}
              <a className="font-semibold">Conditions d'utilisations</a> et{" "}
              <a className="font-semibold">notre Politique de confidentialité</a>
            </label>
          </div>
          <div className="relative flex justify-center">
            {error && <label className="absolute top-2 text-sm font-normal text-red-500">{error}</label>}
            <button type="submit" className="register-button mt-10" disabled={disableRegister} name="register">
              S'inscrire
            </button>
          </div>
          <label className="flex justify-center font-normal">
            Vous avez déjà un compte ?{" "}
            <a className="ms-1 font-extrabold" title="login" href="/login">
              Se connecter
            </a>
          </label>
        </form>
      </div>
      <div className="right-side w-2/3 p-4">
        <Gallery redirectUrl={"/login"} redirectText={"Se connecter"}></Gallery>
      </div>
    </div>
  );
}
