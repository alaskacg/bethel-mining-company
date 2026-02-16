import { Mountain } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-4">
          <Mountain className="h-6 w-6 text-amber-500" />
          <span className="font-bold text-white">Bethel Mining Company</span>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Bethel Mining Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
