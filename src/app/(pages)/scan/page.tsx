import Link from 'next/link';

export default function ScanPage() {
  return (
    <main className="min-h-screen bg-[#FDF8F3] pt-24 pb-16 px-6" dir="rtl">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C8793A]">A.Sa3d Cafe</p>
          <h1 className="mt-2 text-3xl font-black text-[#2C1A0E]">صفحة المسح والدفع</h1>
          <p className="mt-2 text-sm text-[#8C7B6E]">امسح QR على المنتج علشان تروح لتفاصيله وتدفع بسرعة.</p>
        </header>

        <section className="rounded-3xl border border-[#E8D9C8] bg-white p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-[#FFF5EA] p-4">
              <p className="text-lg font-black text-[#2C1A0E]">١) افتح الكاميرا</p>
              <p className="mt-2 text-sm text-[#8C7B6E]">شغل كاميرا الموبايل أو أي تطبيق QR scanner.</p>
            </div>
            <div className="rounded-2xl bg-[#FFF5EA] p-4">
              <p className="text-lg font-black text-[#2C1A0E]">٢) امسح كود المنتج</p>
              <p className="mt-2 text-sm text-[#8C7B6E]">هتنتقل تلقائيا لصفحة المنتج بالاسم والسعر والصورة.</p>
            </div>
            <div className="rounded-2xl bg-[#FFF5EA] p-4">
              <p className="text-lg font-black text-[#2C1A0E]">٣) ادفع فورا</p>
              <p className="mt-2 text-sm text-[#8C7B6E]">راجع تفاصيل المنتج واضغط الدفع من غير انتظار كاشير.</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/products"
              className="rounded-xl bg-[#C8793A] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#9E5A22]"
            >
              عرض كل المنتجات
            </Link>
            <Link
              href="/"
              className="rounded-xl border border-[#E8D9C8] bg-white px-5 py-2.5 text-sm font-bold text-[#2C1A0E] transition hover:border-[#C8793A]/40"
            >
              العودة للرئيسية
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}