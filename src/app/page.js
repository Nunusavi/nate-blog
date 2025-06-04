import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Nate's Blog</h1>
      <p className="text-lg text-gray-600 mb-6">A place to share ideas and stories.</p>
      <Image
        src="/logo.png"
        alt="Nate's Blog Logo"
        width={120}
        height={120}
        className="rounded-full shadow-lg mb-4"
      />
      <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Get Started
      </button>
    </div>
  );
}
