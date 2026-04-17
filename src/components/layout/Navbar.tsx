'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname(); // عشان نعرف إحنا في أنهي تابة حالياً

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'المنتجات', href: '/products' },
        { name: 'صور الكود', href: '/scan' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-[#FDF8F3]/80 backdrop-blur-lg shadow-sm border-b border-[#E8D9C8] py-2'
                : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* 1. Logo (جهة اليمين أو اليسار حسب لغة الموقع) */}
                <Link href="/" className="group flex items-center gap-2.5 shrink-0">
                    <div className="relative">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#C8793A] to-[#9E5A22] flex items-center justify-center shadow-md group-hover:shadow-[#C8793A]/40 transition-all duration-300 group-hover:scale-105">
                            <span className="text-white font-black text-xs tracking-tight">A.S</span>
                        </div>
                        <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#F0A96B] border-2 border-[#FDF8F3]" />
                    </div>
                    <div className="hidden sm:flex flex-col leading-none">
                        <span className="font-black text-[#2C1A0E] text-sm tracking-tight">A.Sa3d</span>
                        <span className="text-[9px] text-[#8C7B6E] font-medium tracking-widest uppercase">Dev</span>
                    </div>
                </Link>

                {/* 2. Middle Tabs (التابات في المنتصف) */}
                <div className="hidden md:flex items-center bg-[#F4EBE2]/50 p-1 rounded-2xl border border-[#E8D9C8]/50">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300 relative group ${isActive
                                        ? 'text-white'
                                        : 'text-[#8C7B6E] hover:text-[#C8793A]'
                                    }`}
                            >
                                {isActive && (
                                    <div className="absolute inset-0 bg-[#C8793A] rounded-xl shadow-md -z-10 animate-in fade-in zoom-in duration-300" />
                                )}
                                {/* تأثير الـ Hover الخلفي */}
                                {!isActive && (
                                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-300 -z-10 scale-95 group-hover:scale-100" />
                                )}
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                {/* 3. Auth Button (جهة اليسار) */}
                <div className="hidden md:flex items-center gap-3 shrink-0">
                    <Link
                        href="/auth/login"
                        className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-[#E8D9C8] hover:border-[#C8793A]/40 bg-white text-[#2C1A0E] font-bold text-sm transition-all duration-300 hover:shadow-lg active:scale-95"
                    >
                        تسجيل الدخول
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className={`w-6 h-0.5 bg-[#2C1A0E] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`w-6 h-0.5 bg-[#2C1A0E] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`w-6 h-0.5 bg-[#2C1A0E] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="bg-[#FDF8F3] border-t border-[#E8D9C8] px-6 py-6 flex flex-col gap-3">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-[#2C1A0E] font-bold text-lg p-3 rounded-xl hover:bg-[#F4EBE2] transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <hr className="border-[#E8D9C8] my-2" />
                    <Link
                        href="/auth/login"
                        className="bg-[#C8793A] text-white px-5 py-3 rounded-xl font-bold text-center shadow-lg"
                    >
                        تسجيل الدخول
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;