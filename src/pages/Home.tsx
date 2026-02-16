import { Mountain, Shield, Users, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-800 to-slate-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Bethel Mining Company</h1>
            <p className="text-xl text-gray-200 mb-8">Mining operations in Bethel region</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Mountain className="h-12 w-12 text-amber-500 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-slate-800">Excellence</h3>
            <p className="text-gray-600">Professional mining services</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Shield className="h-12 w-12 text-amber-500 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-slate-800">Safety</h3>
            <p className="text-gray-600">Industry-leading standards</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Users className="h-12 w-12 text-amber-500 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-slate-800">Expertise</h3>
            <p className="text-gray-600">Experienced professionals</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <TrendingUp className="h-12 w-12 text-amber-500 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-slate-800">Growth</h3>
            <p className="text-gray-600">Sustainable practices</p>
          </div>
        </div>
      </div>
    </>
  );
}
