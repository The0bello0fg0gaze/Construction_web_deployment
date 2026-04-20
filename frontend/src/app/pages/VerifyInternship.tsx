import { useState } from "react";
import { useNavigate } from "react-router";
import { Search, ShieldCheck, QrCode, AlertCircle } from "lucide-react";

export default function VerifyInternship() {
  const [certId, setCertId] = useState("");
  const navigate = useNavigate();

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (certId.trim()) {
      navigate(`/verify/${encodeURIComponent(certId.trim())}`);
    }
  };

  return (
    <div className="flex flex-col flex-1 bg-neutral-50 min-h-[calc(100vh-80px)]">
      {/* Header */}
      <div className="bg-neutral-900 text-white py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center justify-center p-4 bg-amber-500 rounded-full mb-8">
            <ShieldCheck className="w-10 h-10 text-neutral-900" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Internship Verification Portal
          </h1>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Verify the authenticity of Excavation Brothers internship certificates. Enter the unique Certificate ID below or scan the QR code on the physical document.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 w-full mb-24">
        {/* Verification Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-neutral-100 mb-8">
          <form onSubmit={handleVerify} className="max-w-xl mx-auto">
            <label htmlFor="certId" className="block text-sm font-semibold text-neutral-700 mb-3">
              Certificate ID Number
            </label>
            <div className="relative flex items-center mb-6">
              <div className="absolute left-4 text-neutral-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                id="certId"
                type="text"
                placeholder="e.g. CERT-2025-001"
                className="w-full pl-12 pr-4 py-4 bg-neutral-50 border border-neutral-200 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-shadow"
                value={certId}
                onChange={(e) => setCertId(e.target.value)}
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-neutral-900 font-bold py-4 rounded-lg text-lg transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              Verify Certificate
            </button>
            
            <div className="mt-8 relative flex items-center">
              <div className="flex-grow border-t border-neutral-200"></div>
              <span className="flex-shrink-0 mx-4 text-neutral-400 text-sm font-medium uppercase tracking-wider">OR</span>
              <div className="flex-grow border-t border-neutral-200"></div>
            </div>

            <button
              type="button"
              className="mt-8 w-full bg-white hover:bg-neutral-50 text-neutral-700 border border-neutral-200 font-semibold py-4 rounded-lg text-lg transition-colors flex items-center justify-center gap-2"
              onClick={() => alert("QR scanning feature is typically activated on mobile devices. For this demo, please use the manual ID entry.")}
            >
              <QrCode className="w-6 h-6" /> Scan QR Code
            </button>
          </form>
        </div>

        {/* Mock IDs for Demo Purposes */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex gap-4">
          <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
          <div>
            <h3 className="text-blue-900 font-bold mb-2">Demo Testing Data</h3>
            <p className="text-blue-800 text-sm mb-3">
              Since we are using mock data for this demonstration, you can try verifying these sample Certificate IDs:
            </p>
            <ul className="list-disc list-inside text-blue-800 font-mono text-sm space-y-1">
              <li>CERT-2025-001 <span className="text-blue-600/70 font-sans ml-2">(Project Management)</span></li>
              <li>CERT-2025-002 <span className="text-blue-600/70 font-sans ml-2">(Civil Engineering)</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
