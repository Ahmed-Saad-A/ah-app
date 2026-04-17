'use client';

import Link from 'next/link';

/* ─── Types ─── */
interface Particle {
    s: string;
    c: string;
    b: string;
    d: string;
    dur: string;
    l?: string;
    r?: string;
}

interface Step {
    n: string;
    t: string;
    d: string;
}

/* ─── Constants ─── */
const PARTICLES: Particle[] = [
    { s: '8px', c: '#C8793A', b: '30%', l: '15%', d: '0s', dur: '5s' },
    { s: '5px', c: '#F0A96B', b: '20%', l: '25%', d: '1.2s', dur: '4s' },
    { s: '6px', c: '#9E5A22', b: '40%', r: '20%', d: '.6s', dur: '6s' },
    { s: '4px', c: '#C8793A', b: '25%', r: '30%', d: '2s', dur: '5s' },
    { s: '7px', c: '#F0A96B', b: '55%', l: '10%', d: '1.8s', dur: '7s' },
];

const STEPS: Step[] = [
    { n: '١', t: 'اسكن الـ QR', d: 'افتح الكاميرا واسكن الكود الموجود على كيس المنتج' },
    { n: '٢', t: 'شوف التفاصيل', d: 'هتظهرلك صورة المنتج واسمه وسعره الحالي في ثانية' },
    { n: '٣', t: 'ادفع وخلاص', d: 'اضغط ادفع وأنهي عمليتك من غير ما تستنى حد' },
];

export default function Home() {
    return (
        <>
            <style>{`
        @keyframes float-up {
          0%   { opacity: 0; transform: translateY(0) scale(1); }
          15%  { opacity: .7; }
          85%  { opacity: .2; }
          100% { opacity: 0; transform: translateY(-110px) scale(.4); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-slow  { to { transform: rotate(360deg); } }
        @keyframes pulse-ring { to { transform: scale(2.4); opacity: 0; } }
        @keyframes blob {
          0%,100% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
          50%      { border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; }
        }
        .animate-fade-up   { animation: fade-up .7s ease-out both; }
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
        .blob               { animation: blob 8s ease-in-out infinite; }
        .blob-delay        { animation-delay: -4s; }
        .pulse-ring        { animation: pulse-ring 2.2s ease-out infinite; }
        .pulse-ring-2      { animation-delay: 1.1s; }
        .float-p           { animation: float-up 5s ease-in-out infinite; }
      `}</style>


            <main className="min-h-screen bg-[#FDF8F3] overflow-hidden" dir="rtl">

                {/* ── HERO SECTION ── */}
                <section className="relative min-h-[85vh] flex items-center justify-center px-6 pt-20 pb-12 overflow-hidden">

                    {/* Decorative Blobs */}
                    <div className="blob absolute -top-32 -right-32 w-96 h-96 bg-[#F0A96B]/20 pointer-events-none" />
                    <div className="blob blob-delay absolute -bottom-32 -left-32 w-80 h-80 bg-[#C8793A]/15 pointer-events-none" />

                    {/* Floating Particles - Fixed Type Issue */}
                    {PARTICLES.map((p, i) => (
                        <div
                            key={i}
                            className="float-p absolute rounded-full opacity-0"
                            style={{
                                width: p.s,
                                height: p.s,
                                background: p.c,
                                bottom: p.b,
                                left: p.l,
                                right: p.r,
                                animationDelay: p.d,
                                animationDuration: p.dur,
                            }}
                        />
                    ))}

                    {/* Hero Content */}
                    <div className="relative z-10 max-w-2xl mx-auto text-center">
                        <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C8793A]/10 border border-[#C8793A]/20 mb-8">
                            <div className="w-2 h-2 rounded-full bg-[#4A9B6F] animate-pulse" />
                            <span className="text-[#C8793A] text-xs font-semibold tracking-wide">الكافية دلوقتي بتخدم</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-black text-[#2C1A0E] leading-tight mb-6 animate-fade-up" style={{ animationDelay: '.1s' }}>
                            اسكن{' '}
                            <span className="relative inline-block text-[#C8793A]">
                                الكود
                                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 100 8" fill="none">
                                    <path d="M2 6C20 2 50 0 98 4" stroke="#C8793A" strokeWidth="3" strokeLinecap="round" opacity=".4" />
                                </svg>
                            </span>
                            <br />وادفع على طول
                        </h1>

                        <p className="text-[#8C7B6E] text-lg leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: '.2s' }}>
                            مش لاقي الكاشير؟ لا مشكلة. اسكن الـ QR على الأكياس وادفع في ثواني.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '.3s' }}>
                            <Link
                                href="/products"
                                className="group relative w-full sm:w-auto px-10 py-4 bg-[#C8793A] hover:bg-[#9E5A22] text-white font-bold text-lg rounded-2xl shadow-xl shadow-[#C8793A]/30 transition-all duration-300 overflow-hidden flex items-center justify-center gap-2"
                            >
                                شوف المنيو
                            </Link>
                            <Link
                                href="/scan"
                                className="w-full sm:w-auto px-10 py-4 bg-white border-2 border-[#E8D9C8] text-[#2C1A0E] font-bold text-lg rounded-2xl hover:bg-[#FDF8F3] hover:border-[#C8793A] transition-all duration-300 text-center"
                            >
                                ابدأ المسح
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ── HOW IT WORKS ── */}
                <section className="py-16 px-6 bg-gradient-to-b from-transparent to-[#F5EDE0]/50">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="text-[#C8793A] font-semibold text-sm tracking-widest uppercase">بسيطة جداً</span>
                            <h2 className="text-3xl font-black text-[#2C1A0E] mt-2">إزاي بتشتغل؟</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {STEPS.map((step) => (
                                <div
                                    key={step.n}
                                    className="flex flex-col gap-4 p-8 rounded-3xl bg-white/60 backdrop-blur-sm border border-[#E8D9C8] hover:border-[#C8793A]/30 transition-all duration-400"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C8793A] to-[#9E5A22] flex items-center justify-center shadow-lg shadow-[#C8793A]/30">
                                        <span className="text-white font-black text-xl">{step.n}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-[#2C1A0E] font-bold text-lg mb-2">{step.t}</h3>
                                        <p className="text-[#8C7B6E] text-sm leading-relaxed">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── CTA BANNER ── */}
                <section className="py-20 px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#2C1A0E] to-[#4A2C12] p-12 text-center shadow-2xl shadow-black/20">
                            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#C8793A]/20 blur-3xl pointer-events-none" />

                            <span className="relative z-10 text-[#C8793A] font-semibold text-sm tracking-widest uppercase block mb-4">A.Sa3d Dev</span>
                            <h2 className="relative z-10 text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                                خلي راحتك<br />في الكافية بتاعتنا
                            </h2>
                            <p className="relative z-10 text-[#E8D9C8]/70 text-base mb-10 max-w-md mx-auto">
                                مش محتاج تستنى أو تسأل. كل حاجة في إيدك وبسرعة موبايلك.
                            </p>

                            <Link
                                href="/scan"
                                className="relative z-10 inline-flex items-center gap-3 px-10 py-4 bg-[#C8793A] hover:bg-[#F0A96B] text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C8793A]/40"
                            >
                                ابدأ المسح دلوقتي
                                <svg className="w-5 h-5 rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

        </>
    );
}