import Image from 'next/image';
import SubscriptionForm from '@/components/SubscriptionForm';

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen text-white overflow-hidden">
      
      <Image 
        src="/background.jpg" 
        alt="Playa relajante" 
        fill
        style={{objectFit:'cover'}}
        priority
      />

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex flex-col items-center gap-4 text-center px-4">
        <Image src="/logo.png" alt="Traveli" width={150} height={150} />

        <h1 className="text-4xl font-semibold">Viaja como si ya hubieses estado</h1>
        <p className="text-lg max-w-xl">
          Con <strong>Traveli</strong> nos conectamos, hacemos tours colaborativos, mapas con rutas propuestas, tips personalizados, AI, audioguías y mucho más.
        </p>

        <SubscriptionForm />
      </div>
    </main>
  );
}
