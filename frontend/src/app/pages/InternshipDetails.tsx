import { MOCK_INTERNSHIPS } from "../data/mockData";
import { useParams, Link } from "react-router";
import { useState, useEffect } from "react"; // Add these
import { ShieldCheck, XCircle, ArrowLeft, Calendar, User, Briefcase, FileCheck, Award, Loader2 } from "lucide-react";

export default function InternshipDetails() {
  const { id } = useParams<{ id: string }>();
  const [internship, setInternship] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with your Render URL or environment variable
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    
    fetch(`${API_URL}/api/interns/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setInternship(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching internship:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
        <Loader2 className="w-12 h-12 text-amber-500 animate-spin" />
        <p className="mt-4 text-neutral-600 font-medium">Verifying Certificate...</p>
      </div>
    );
  }

  if (!internship) {
    return (
      <div className="flex flex-col flex-1 items-center justify-center bg-neutral-50 px-4 min-h-[calc(100vh-80px)]">
        <div className="max-w-md w-full text-center">
          <XCircle className="w-20 h-20 text-red-500 mx-auto mb-6" />
          <h1 className="text-3xl font-extrabold text-neutral-900 mb-4 tracking-tight">Certificate Not Found</h1>
          <p className="text-neutral-600 mb-8 leading-relaxed text-lg">
            We couldn't find an internship certificate with the ID "{id}". Please double-check the ID number and try again.
          </p>
          <Link
            to="/verify"
            className="inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-md hover:bg-neutral-800 transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Verification
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 bg-neutral-50 min-h-[calc(100vh-80px)] pt-12 pb-24">
      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <Link
          to="/verify"
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-amber-600 transition-colors font-semibold mb-8"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Search
        </Link>

        {/* Verified Banner */}
        <div className="bg-green-50 border border-green-200 rounded-t-2xl p-6 sm:p-8 flex items-center justify-center gap-4 shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=1920')] opacity-5 mix-blend-overlay"></div>
          <ShieldCheck className="w-10 h-10 text-green-600 relative z-10" />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-green-800 relative z-10 tracking-tight">
            Verified Certificate
          </h2>
        </div>

        {/* Details Card */}
        <div className="bg-white rounded-b-2xl shadow-xl border border-neutral-100 p-8 sm:p-12 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
             <Award className="w-48 h-48 text-amber-500" />
          </div>
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-12">
              <div>
                <p className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">Intern Name</p>
                <div className="flex items-center gap-3">
                  <User className="w-6 h-6 text-amber-500" />
                  <p className="text-2xl font-bold text-neutral-900">{internship.internName}</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">Role</p>
                <div className="flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-amber-500" />
                  <p className="text-xl font-medium text-neutral-800">{internship.role}</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">Time Period</p>
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-amber-500" />
                  <div>
                    <p className="text-lg font-medium text-neutral-800">
                      {internship.startDate} — {internship.endDate}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">Supervisor</p>
                <div className="flex items-center gap-3">
                  <User className="w-6 h-6 text-amber-500" />
                  <p className="text-lg font-medium text-neutral-800">{internship.supervisor}</p>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-neutral-100">
              <div className="flex items-center gap-3 mb-8">
                <FileCheck className="w-7 h-7 text-amber-500" />
                <h3 className="text-2xl font-bold text-neutral-900">Tasks Completed</h3>
              </div>
              
              <ul className="space-y-4">
                {internship.tasksCompleted.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-amber-200 transition-colors group">
                    <ShieldCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-neutral-700 leading-relaxed text-lg">{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 pt-8 border-t border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-6 bg-amber-50 rounded-xl p-6">
              <div>
                <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-1">Certificate ID</p>
                <p className="text-xl font-mono font-bold text-neutral-900">{internship.id}</p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-1">Issuing Authority</p>
                <p className="font-bold text-neutral-800">BuildCorp Human Resources</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
