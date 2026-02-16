import { Link } from 'react-router-dom';
import { Mountain } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-800 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <Mountain className="h-8 w-8 text-amber-500" />
          <span>Bethel Mining Company</span>
        </Link>
      </nav>
    </header>
  );
}
