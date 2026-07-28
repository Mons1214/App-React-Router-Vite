import type { Route } from "./+types/main";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Main Page" },
        { name: "description", content: "Main page after login." },
    ];
}

export default function Main() {
    return (
        <main className="pt-16 p-4 container mx-auto">
            <h1 className="text-3xl font-bold">Main Page</h1>
            <p className="mt-4">Bienvenido a la página principal después del login.</p>
        </main>
    );
}
