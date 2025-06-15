import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Image src="/logo.png" alt="Traveli Logo" width={200} height={200} />
      <h1 className="text-5xl font-bold">Traveli</h1>
      <p className="mt-4 text-xl">La primera app colaborativa de viajes impulsada con AI 🎙️🗺️✨.</p>
      <p className="mt-2 text-lg text-gray-500">¡Próximamente disponible!</p>
    </main>
  );
}
