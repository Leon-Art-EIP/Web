import React from 'react';
import './register.css';


function Register() {
  return (
    <div className="flex min-h-screen">
      <div className="left-side w-1/3 flex flex-col items-center justify-center">
        <label className='text-5xl font-extrabold'> S'enregistrer</label>
        <form className="flex flex-col gap-8 w-4/6">
          <input type="text" name="username" className='register-text-field' placeholder="Nom d'utilisateur"/>
          <input type="email" name="email" className='register-text-field' placeholder="Adresse email"/>
          <input type="password" name="password" className='register-text-field' placeholder="Mot de passe"/>
          <label className='text-sm font-normal w-11/12 text-center'>En vous enregistrant, vous acceptez les <a className='font-semibold'>Conditions d'utilisations</a> et <a className='font-semibold'>notre Politique de confidentialité</a></label>
          <button type="submit" className='register-button mt-10'>S'inscrire</button>
          <label className='flex justify-center font-normal'>Vous avez déjà un compte ? <a className='ms-1 font-extrabold'>Connexion</a></label>
        </form>
      </div>
      <div className="w-2/3 p-4">
        {/* Importation de votre composant */}
        <h1> Helloworld </h1>
      </div>
    </div>
  );
}

export default Register;