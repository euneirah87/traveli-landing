'use client';

import { useState } from 'react';

export default function SubscriptionForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) return;

    // Aquí podrías enviar el email a tu backend o servicio de suscripción
    console.log('Correo suscrito:', email);

    setSubmitted(true);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 w-full max-w-md">
      {submitted ? (
        <p className="text-green-300 text-sm">¡Gracias por suscribirte!</p>
      ) : (
        <>
          <input
            type="email"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-white text-black rounded hover:bg-gray-300 transition-colors"
          >
            Quiero saber más
          </button>
        </>
      )}
    </form>
  );
}
