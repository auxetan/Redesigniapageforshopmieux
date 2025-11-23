import { User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white/40 backdrop-blur-xl border-b border-white/60 px-8 py-4 flex-shrink-0">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl text-blue-600">ShopMieux</h1>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Accueil
          </a>
          <a
            href="#"
            className="text-blue-600"
          >
            Demander à l'IA
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* User icon */}
        <button className="w-10 h-10 rounded-full bg-white/60 backdrop-blur-lg border border-white/80 flex items-center justify-center text-gray-700 hover:text-blue-600 hover:bg-white/80 transition-all duration-200 shadow-sm">
          <User className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
