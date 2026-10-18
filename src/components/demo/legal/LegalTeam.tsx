import { ShieldCheck, Award, GraduationCap } from "lucide-react";

const teamMembers = [
  {
    name: "Hendra Pratama, S.H., M.H.",
    role: "Managing Partner & Advokat",
    specialty: "Hukum Korporasi, M&A, & Mitigasi Risiko Bisnis",
    badge: "PERADI Advocate",
    initials: "HP",
    experience: "15+ Tahun Pengalaman",
  },
  {
    name: "Maya Savitri, S.H., M.Kn.",
    role: "Notaris & PPAT Rekanan",
    specialty: "Akta Notaril, Hukum Pertanahan & Perizinan Berusaha",
    badge: "Ikatan Notaris Indonesia",
    initials: "MS",
    experience: "12+ Tahun Pengalaman",
  },
  {
    name: "Raden Wijaya, S.H., LL.M.",
    role: "Senior Legal Counsel",
    specialty: "Kontrak Komersial, Hubungan Industrial & Kepatuhan",
    badge: "International Commercial Law",
    initials: "RW",
    experience: "9+ Tahun Pengalaman",
  },
];

export default function LegalTeam() {
  return (
    <section id="tim" className="bg-slate-50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-900">
            Tim Advokat &amp; Konsultan
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Didampingi Praktisi Hukum Berpengalaman
          </h2>
          <p className="mt-3 text-slate-600">
            Kombinasi keahlian praktisi hukum litigasi, notaris, dan konsultan
            korporasi untuk memberikan opini hukum yang menyeluruh dan aman.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-slate-300 hover:shadow-md">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-lg font-bold text-white">
                  {member.initials}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{member.name}</h3>
                  <p className="text-sm font-medium text-blue-900">
                    {member.role}
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-slate-400" />
                  <span>{member.specialty}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-slate-400" />
                  <span>{member.experience}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-slate-400" />
                  <span className="font-medium text-slate-700">
                    {member.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
