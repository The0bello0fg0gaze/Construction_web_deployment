import { Link } from "react-router";
import { AlertTriangle, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-neutral-50 px-4 min-h-[calc(100vh-80px)]">
      <div className="max-w-md w-full text-center">
        <AlertTriangle className="w-24 h-24 text-amber-500 mx-auto mb-8" />
        <h1 className="text-4xl font-extrabold text-neutral-900 mb-6 tracking-tight">404 - Page Not Found</h1>
        <p className="text-xl text-neutral-600 mb-10 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-neutral-900 font-bold px-8 py-4 rounded-md transition-colors text-lg"
        >
          <ArrowLeft className="w-5 h-5" /> Return Home
        </Link>
      </div>
    </div>
  );
}