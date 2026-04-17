'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = 'cafe_admin_token=; path=/; max-age=0; SameSite=Strict';
    localStorage.removeItem('cafe_admin');
    router.push('/auth/login');
  };

  return (
    <main className="min-h-screen bg-[#FDF8F3] pt-24 pb-14 px-6" dir="rtl">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-[#C8793A]">A.Sa3d Cafe Admin</p>
            <h1 className="mt-2 text-3xl font-black text-[#2C1A0E]">لوحة التحكم</h1>
            <p className="mt-2 text-sm text-[#8C7B6E]">تم تسجيل دخولك بنجاح. من هنا تقدر تتابع حالة الكافية بسرعة.</p>
          </div>
          <button
            onClick={handleLogout}
            className="h-fit rounded-xl border border-[#E8D9C8] bg-white px-5 py-2.5 text-sm font-bold text-[#2C1A0E] transition hover:border-[#C8793A]/40"
          >
            تسجيل الخروج
          </button>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-[#E8D9C8] bg-white p-5">
            <p className="text-xs text-[#8C7B6E]">الحالة</p>
            <p className="mt-2 text-lg font-black text-[#2C1A0E]">النظام يعمل</p>
          </div>
          <div className="rounded-2xl border border-[#E8D9C8] bg-white p-5">
            <p className="text-xs text-[#8C7B6E]">صفحة المنتجات</p>
            <p className="mt-2 text-lg font-black text-[#2C1A0E]">جاهزة للتصفح</p>
          </div>
          <div className="rounded-2xl border border-[#E8D9C8] bg-white p-5">
            <p className="text-xs text-[#8C7B6E]">الحماية</p>
            <p className="mt-2 text-lg font-black text-[#2C1A0E]">مفعلة عبر Middleware</p>
          </div>
        </section>

        <div className="mt-8 rounded-3xl border border-[#E8D9C8] bg-linear-to-br from-[#2C1A0E] to-[#4A2C12] p-7">
          <h2 className="text-xl font-black text-white">الانتقال السريع</h2>
          <p className="mt-2 text-sm text-[#E8D9C8]/75">استخدم الروابط السريعة لمراجعة تجربة العميل مباشرة.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="rounded-xl bg-[#C8793A] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#F0A96B]"
            >
              صفحة المنتجات
            </Link>
            <Link
              href="/scan"
              className="rounded-xl border border-[#E8D9C8]/40 bg-white/10 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-white/20"
            >
              صفحة المسح
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
