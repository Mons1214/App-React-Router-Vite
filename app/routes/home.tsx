import { useState, type ChangeEvent, type FormEvent } from "react";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Login" },
    { name: "description", content: "Login page for the app." },
  ];
}

export default function Home() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.email || !formData.password) {
      setMessage("Por favor completa ambos campos.");
      return;
    }

    setMessage(`Formulario listo para ${formData.email}`);
  };

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1 className="text-3xl font-bold">Login</h1>
      <p className="mt-4">Ingresa tus datos para continuar.</p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
      >
        <div className="mb-4">
          <label htmlFor="email" className="mb-1 block font-medium text-gray-700">
            Correo
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 text-green-700"
            placeholder="tu@correo.com"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="mb-1 block font-medium text-gray-700">
            Contraseña
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full rounded border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 text-green-700"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
        >
          Iniciar sesión
        </button>

        {message ? <p className="mt-4 text-sm text-gray-600">{message}</p> : null}
      </form>
    </main>
  );
}
