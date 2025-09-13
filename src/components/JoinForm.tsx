"use client";

import type { FormEvent } from "react";

export default function JoinForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("¡Gracias por tu interés! Nos pondremos en contacto pronto.");
  };

  return (
    <form className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 text-left" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="name" className="type-small text-white/85 mb-1">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="rounded-md border-0 px-3 py-2 bg-white text-blue placeholder:text-blue/70 shadow-sm focus:outline-none focus:ring-2 focus:ring-white/60"
          placeholder="Tu nombre"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="type-small text-white/85 mb-1">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-md border-0 px-3 py-2 bg-white text-blue placeholder:text-blue/70 shadow-sm focus:outline-none focus:ring-2 focus:ring-white/60"
          placeholder="tu@mail.com"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="phone" className="type-small text-white/85 mb-1">
          Teléfono
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="rounded-md border-0 px-3 py-2 bg-white text-blue placeholder:text-blue/70 shadow-sm focus:outline-none focus:ring-2 focus:ring-white/60"
          placeholder="Opcional"
        />
      </div>
      <div className="md:col-span-3 flex justify-center">
        <button type="submit" className="btn btn-contrast px-8">Suscribirme</button>
      </div>
    </form>
  );
}
