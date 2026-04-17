import Image from 'next/image';
import Link from 'next/link';
import NTI from '@/assets/NTI.png';
import ITI from '@/assets/ITI.png';

const Footer = () => {
    return (
        <footer className="bg-[#2C1A0E] text-[#E8D9C8] py-12 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Top row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[#3D2A1A]">

                    {/* Cafe logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C8793A] to-[#9E5A22] flex items-center justify-center shadow-md">
                            <span className="text-white font-black text-sm">A.S</span>
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="font-black text-white text-base tracking-tight">A.Sa3d</span>
                            <span className="text-[10px] text-[#C8793A] font-medium tracking-widest uppercase">Dev</span>
                        </div>
                    </div>

                    {/* ITI + NTI in footer */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2.5 opacity-75 hover:opacity-100 transition-opacity">
                            <Image src={ITI} alt="ITI" width={32} height={32} className="object-contain brightness-0 invert opacity-80" />
                            <div className="flex flex-col leading-none">
                                <span className="text-white text-xs font-bold">ITI</span>
                                <span className="text-[9px] text-[#8C7B6E] tracking-wide">Information Technology Institute</span>
                            </div>
                        </div>
                        <div className="w-px h-8 bg-[#3D2A1A]" />
                        <div className="flex items-center gap-2.5 opacity-75 hover:opacity-100 transition-opacity">
                            <Image src={NTI} alt="NTI" width={32} height={32} className="object-contain brightness-0 invert opacity-80" />
                            <div className="flex flex-col leading-none">
                                <span className="text-white text-xs font-bold">NTI</span>
                                <span className="text-[9px] text-[#8C7B6E] tracking-wide">National Telecommunication Institute</span>
                            </div>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-8 text-sm">
                        <Link href="/scan" className="text-[#8C7B6E] hover:text-[#C8793A] transition-colors">مسح منتج</Link>
                        <Link href="/auth/login" className="text-[#8C7B6E] hover:text-[#C8793A] transition-colors">تسجيل الدخول</Link>
                    </div>
                </div>

                {/* Bottom row */}
                <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[#8C7B6E] text-xs">
                        اسكن → شوف السعر → ادفع. بسيطة وسهلة.
                    </p>
                    <p className="text-[#8C7B6E] text-xs text-center">
                        © 2025 A.Sa3d Dev · تابع لـ{" "}
                        <span className="text-[#B71C1C] font-semibold">ITI</span>
                        {" & "}
                        <span className="text-[#1565C0] font-semibold">NTI</span>
                        {" "}وزارة الاتصالات
                    </p>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#4A9B6F] animate-pulse" />
                        <span className="text-[#4A9B6F] text-xs font-medium">الكافية شغالة</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}


export default Footer