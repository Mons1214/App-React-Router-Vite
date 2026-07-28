import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Login" },
    { name: "description", content: "Login page for the app." },
  ];
}

export default function Home() {
  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1 className="text-3xl font-bold">Login</h1>
      <p className="mt-4">Pulsa el botón para ir a la página principal.</p>
      <Link
        to="/main"
        className="inline-block mt-6 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Ir a Main
      </Link>
    </main>
  );
}
