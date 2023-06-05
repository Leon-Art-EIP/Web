"use client";

import Gallery from "../../components/gallery";
import React, { useState } from "react";
import "./page.css";

interface IBaseFormValues {
  email: string;
  password: string;
}

export default function Page(): JSX.Element {
  const [disableLogin, setDisableLogin] = useState(false);

  const [error, setError] = useState("");

  function validateForm({ email, password }: IBaseFormValues) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
      setError("Veuillez remplir tous les champs.");
      setDisableLogin(true);
      return false;
    } else if (!emailRegex.test(email)) {
      setError("Adresse email invalide.");
      setDisableLogin(true);
      return false;
    }
    setDisableLogin(false);
    return true;
  }

  const handleInputChange = () => {
    setError("");
    setDisableLogin(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      validateForm({
        email: event.currentTarget.email.value,
        password: event.currentTarget.password.value,
      })
    ) {
      console.log("Valid form");
    }
  };

  return (
    <div className="flex h-screen">
      <div className="left-side h-screen w-1/3 flex flex-col items-center justify-center fixed">
        <label className="text-5xl font-extrabold w-4/6 text-center welcome-back">Ravi de vous revoir !</label>
        <form className="flex flex-col gap-8 w-4/6" onSubmit={handleSubmit}>
        <input 
            type="email"
            name="email"
            className="login-text-field"
            placeholder="Adresse email"
            onChange={handleInputChange}
          />
          <input 
            type="password"
            name="password"
            className="login-text-field"
            placeholder="Mot de passe"
            onChange={handleInputChange}
          />
          <div className="relative flex justify-center mt-5">
            {error && <label className="absolute top-2 text-sm font-normal text-red-500">{error}</label>}
            <button type="submit" className="login-button mt-10" disabled={disableLogin} name="login">
              S'inscrire
            </button>
          </div>
          <label className="flex justify-center font-normal">
            Vous n'avez pas de compte ? <a className="ms-1 font-extrabold" title="register" href="/register">S'enregistrer</a>
          </label>
        </form>
      </div>
      <div className="right-side w-2/3 p-4">
        <Gallery redirectUrl={"/register"} redirectText={"S'enregistrer"}></Gallery>
      </div>
    </div>
  );
}
