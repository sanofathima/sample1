import { Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold text-white">WebDesign Studio</span>
          </div>

          <p className="text-center text-gray-400 max-w-md">
            Transforming ideas into beautiful digital experiences
          </p>

          <div className="border-t border-gray-800 pt-6 w-full text-center">
            <p className="text-sm text-gray-500">
              © {currentYear} WebDesign Studio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
