import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MOCK_PRODUCTS } from '@/data';

interface ProductDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const { id } = await params;
  const productId = Number(id);
  const product = MOCK_PRODUCTS.find((item) => item.id === productId);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FDF8F3] pt-24 pb-16 px-6" dir="rtl">
      <div className="mx-auto max-w-4xl rounded-3xl border border-[#E8D9C8] bg-white p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          <div className="relative h-72 w-full overflow-hidden rounded-2xl bg-[#FFF5EA]">
            <Image src={product.image} alt={product.name} fill className="object-contain p-6" />
          </div>

          <div className="flex flex-col">
            <p className="text-xs font-bold uppercase tracking-widest text-[#C8793A]">تفاصيل المنتج</p>
            <h1 className="mt-2 text-3xl font-black leading-tight text-[#2C1A0E]">{product.name}</h1>
            <p className="mt-4 text-sm text-[#8C7B6E]">
              امسح QR المنتج للوصول السريع لهذه الصفحة ثم اكد الدفع مباشرة بدون انتظار كاشير.
            </p>
            <div className="mt-6 rounded-2xl bg-[#FFF5EA] p-4">
              <p className="text-sm text-[#8C7B6E]">السعر الحالي</p>
              <p className="mt-1 text-4xl font-black text-[#C8793A]">
                {product.price} <span className="text-base text-[#8C7B6E]">جنيه</span>
              </p>
            </div>
            <button className="mt-6 rounded-xl bg-[#C8793A] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#9E5A22]">
              الدفع الآن
            </button>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="rounded-xl border border-[#E8D9C8] bg-white px-4 py-2.5 text-sm font-bold text-[#2C1A0E] transition hover:border-[#C8793A]/40"
              >
                رجوع للمنتجات
              </Link>
              <Link
                href="/scan"
                className="rounded-xl border border-[#E8D9C8] bg-white px-4 py-2.5 text-sm font-bold text-[#2C1A0E] transition hover:border-[#C8793A]/40"
              >
                مسح منتج اخر
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
