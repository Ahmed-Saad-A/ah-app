import Link from 'next/link';

export default function NotFound() {
    return (
        <>
            <style>{`
        @keyframes blob {
          0%,100% { border-radius:60% 40% 30% 70%/60% 30% 70% 40%; }
          50%      { border-radius:30% 60% 70% 40%/50% 60% 30% 60%; }
        }
        @keyframes fade-up {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes float {
          0%,100% { transform:translateY(0px) rotate(-2deg); }
          50%      { transform:translateY(-16px) rotate(2deg); }
        }
        @keyframes spin-slow { to { transform:rotate(360deg); } }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }

        .blob  { animation:blob 8s ease-in-out infinite; }
        .blob2 { animation:blob 8s ease-in-out infinite; animation-delay:-4s; }
        .float-anim { animation:float 4s ease-in-out infinite; }
        .spin-slow  { animation:spin-slow 14s linear infinite; }
        .fade-1 { animation:fade-up .6s ease-out .1s both; }
        .fade-2 { animation:fade-up .6s ease-out .2s both; }
        .fade-3 { animation:fade-up .6s ease-out .3s both; }
        .fade-4 { animation:fade-up .6s ease-out .4s both; }
      `}</style>

            <main
                className="min-h-screen bg-[#FDF8F3] flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden"
                dir="rtl"
            >
                {/* Background blobs */}
                <div className="blob absolute -top-40 -right-40 w-96 h-96 bg-[#F0A96B]/15 pointer-events-none" />
                <div className="blob2 absolute -bottom-40 -left-40 w-80 h-80 bg-[#C8793A]/12 pointer-events-none" />

                {/* Spinning ring decoration */}
                <div className="absolute top-16 left-16 w-24 h-24 opacity-20 hidden lg:block">
                    <div className="spin-slow w-full h-full rounded-full border-2 border-dashed border-[#C8793A]" />
                </div>
                <div className="absolute bottom-16 right-16 w-16 h-16 opacity-20 hidden lg:block">
                    <div className="spin-slow w-full h-full rounded-full border-2 border-dashed border-[#C8793A]" style={{ animationDirection: 'reverse' }} />
                </div>

                <div className="relative z-10 flex flex-col items-center text-center max-w-lg">

                    {/* Floating QR / emoji illustration */}
                    <div className="float-anim mb-8 relative">
                        <div className="w-32 h-32 rounded-3xl bg-white border-2 border-[#E8D9C8] shadow-2xl shadow-[#C8793A]/15 flex items-center justify-center">
                            {/* Mini broken QR icon */}
                            <svg viewBox="0 0 60 60" className="w-20 h-20" fill="none">
                                {/* Top-left block */}
                                <rect x="3" y="3" width="22" height="22" rx="3" fill="#C8793A" opacity=".15" stroke="#C8793A" strokeWidth="1.5" />
                                <rect x="7" y="7" width="14" height="14" rx="1.5" fill="#FDF8F3" />
                                <rect x="10" y="10" width="8" height="8" rx="1" fill="#C8793A" opacity=".5" />

                                {/* Top-right block */}
                                <rect x="35" y="3" width="22" height="22" rx="3" fill="#C8793A" opacity=".15" stroke="#C8793A" strokeWidth="1.5" />
                                <rect x="39" y="7" width="14" height="14" rx="1.5" fill="#FDF8F3" />
                                <rect x="42" y="10" width="8" height="8" rx="1" fill="#C8793A" opacity=".5" />

                                {/* Bottom-left block */}
                                <rect x="3" y="35" width="22" height="22" rx="3" fill="#C8793A" opacity=".15" stroke="#C8793A" strokeWidth="1.5" />
                                <rect x="7" y="39" width="14" height="14" rx="1.5" fill="#FDF8F3" />
                                <rect x="10" y="42" width="8" height="8" rx="1" fill="#C8793A" opacity=".5" />

                                {/* Bottom-right = broken / question mark */}
                                <rect x="35" y="35" width="22" height="22" rx="3" fill="#E8D9C8" opacity=".4" strokeDasharray="3 2" stroke="#C8793A" strokeWidth="1.5" />
                                <text x="46" y="51" textAnchor="middle" fontSize="14" fontWeight="900" fill="#C8793A" opacity=".6">?</text>
                            </svg>
                        </div>

                        {/* Pulse ring */}
                        <div className="absolute inset-0 rounded-3xl border-2 border-[#C8793A]/20 animate-ping" style={{ animationDuration: '2.5s' }} />
                    </div>

                    {/* 404 number */}
                    <div className="fade-1 flex items-center gap-2 mb-3">
                        <span className="text-8xl font-black text-[#C8793A] leading-none tracking-tighter">4</span>
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C8793A] to-[#9E5A22] flex items-center justify-center shadow-lg shadow-[#C8793A]/30 -rotate-6">
                            <span className="text-white font-black text-2xl">0</span>
                        </div>
                        <span className="text-8xl font-black text-[#C8793A] leading-none tracking-tighter">4</span>
                    </div>

                    {/* Title */}
                    <h1 className="fade-2 text-2xl md:text-3xl font-black text-[#2C1A0E] mb-3 leading-tight">
                        الصفحة دي مش موجودة!
                    </h1>

                    {/* Description */}
                    <p className="fade-3 text-[#8C7B6E] text-base leading-relaxed mb-10 max-w-sm">
                        يمكن الرابط اتكسر، أو الصفحة اتنقلت لمكان تاني.
                        <br />
                        ارجع للصفحة الرئيسية أو اسكن منتج.
                    </p>

                    {/* CTA buttons */}
                    <div className="fade-4 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                        <Link
                            href="/"
                            className="group relative w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#C8793A] hover:bg-[#9E5A22] text-white font-bold text-base rounded-2xl shadow-lg shadow-[#C8793A]/30 hover:shadow-[#C8793A]/50 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            الصفحة الرئيسية
                            {/* shimmer */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        </Link>

                        <Link
                            href="/scan"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/80 hover:bg-white text-[#2C1A0E] font-bold text-base rounded-2xl border border-[#E8D9C8] hover:border-[#C8793A]/40 hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                            <svg className="w-4 h-4 text-[#C8793A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2" />
                                <rect x="7" y="7" width="10" height="10" rx="1" />
                            </svg>
                            اسكن منتج
                        </Link>
                    </div>

                    {/* Subtle bottom label */}
                    <p className="mt-12 text-[#C8D0C8] text-xs">
                        A.Sa3d Dev · Error 404
                    </p>
                </div>
            </main>
        </>
    );
}