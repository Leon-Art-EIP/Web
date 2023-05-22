import React, { useState } from 'react';
import './register.css';
import Gallery from '../../components/gallery/gallery'

interface IBaseFormValues {
  username: string;
  email: string;
  password: string;
}

function Register() {
  const [disableRegister, setDisableRegister] = useState(false);

  const [error, setError] = useState("");

  function validateForm({ username, email, password }: IBaseFormValues) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expression régulière pour vérifier l'adresse email
  
    if (!username || !email || !password) {
      setError("Veuillez remplir tous les champs.");
      setDisableRegister(true);
      return false;
    } else if (!emailRegex.test(email)) {
      setError("Veuillez entrer une adresse email valide.");
      setDisableRegister(true);
      return false;
    }
    setDisableRegister(false);
    return true;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Logique de traitement du formulaire
    if (validateForm({
      username: event.currentTarget.username.value,
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    })) {
      // Logique de traitement du formulaire si la validation est réussie
      console.log('Formulaire soumis');
    }
  }

  return (
    <div className="flex h-screen">
      <div className="left-side h-screen w-1/3 flex flex-col items-center justify-center fixed">
        <label className='text-5xl font-extrabold'> S'enregistrer</label>
        <form className="flex flex-col gap-8 w-4/6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            className="register-text-field"
            placeholder="Nom d'utilisateur"
          />
          <input
            type="email"
            name="email"
            className="register-text-field"
            placeholder="Adresse email"
          />
          <input
            type="password"
            name="password"
            className="register-text-field"
            placeholder="Mot de passe"
          />
          <label className='text-sm font-normal w-11/12 text-center'>En vous enregistrant, vous acceptez les <a className='font-semibold'>Conditions d'utilisations</a> et <a className='font-semibold'>notre Politique de confidentialité</a></label>
          <div className='relative flex justify-center'>
            {error && <label className='absolute top-2 text-sm font-normal text-red-500'>{error}</label>}
            <button type="submit" className='register-button mt-10' disabled={disableRegister}>S'inscrire</button>
          </div>
          <label className='flex justify-center font-normal'>Vous avez déjà un compte ? <a className='ms-1 font-extrabold'>Se connecter</a></label>
        </form>
      </div>
      <div className="right-side w-2/3 p-4">
        <Gallery></Gallery>
      </div>
    </div>
  );
}

export default Register;