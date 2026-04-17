import Link from 'next/link';

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#FDF8F3] flex items-center justify-center px-6 py-16" dir="rtl">
      <div className="w-full max-w-md rounded-3xl border border-[#E8D9C8] bg-white p-8 text-center shadow-sm">
        <p className="text-xs font-bold uppercase tracking-widest text-[#C8793A]">A.Sa3d Cafe</p>
        <h1 className="mt-2 text-2xl font-black text-[#2C1A0E]">إنشاء حساب إداري</h1>
        <p className="mt-3 text-sm leading-relaxed text-[#8C7B6E]">
          التسجيل الجديد غير متاح حاليا. تواصل مع إدارة المشروع للحصول على صلاحية دخول.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <Link
            href="/auth/login"
            className="rounded-xl bg-[#C8793A] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#9E5A22]"
          >
            الذهاب لتسجيل الدخول
          </Link>
          <Link
            href="/"
            className="rounded-xl border border-[#E8D9C8] bg-white px-5 py-2.5 text-sm font-bold text-[#2C1A0E] transition hover:border-[#C8793A]/40"
          >
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </main>
  );
}