import React, { useState } from 'react';
import './register.css';
import Gallery from '../../components/gallery/gallery'

function Register() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [onRegister, setOnRegister] = useState(false);

  function validateForm() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expression régulière pour vérifier l'adresse email
  
    if (!username || !email || !password) { // Vérifier si les champs sont remplis
      alert('Veuillez remplir tous les champs');
      return false;
    } else if (!emailRegex.test(email)) { // Vérifier si l'adresse email est valide
      alert('Veuillez entrer une adresse email valide');
      return false;
    }
  
    return true;
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Logique de traitement du formulaire
    if (validateForm()) {
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
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            type="email"
            name="email"
            className="register-text-field"
            placeholder="Adresse email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            name="password"
            className="register-text-field"
            placeholder="Mot de passe"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <label className='text-sm font-normal w-11/12 text-center'>En vous enregistrant, vous acceptez les <a className='font-semibold'>Conditions d'utilisations</a> et <a className='font-semibold'>notre Politique de confidentialité</a></label>
          <button type="submit" className='register-button mt-10' disabled={onRegister}>S'inscrire</button>
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