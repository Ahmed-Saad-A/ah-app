'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ScanLine, ShoppingCart, Star } from 'lucide-react';
import {
    CATEGORIES,
    MOCK_PRODUCTS,
    type Category,
    type Product,
} from '@/data';


function ProductCard({ product }: { product: Product }) {
    const [imgErr, setImgErr] = useState(false);
    const [added, setAdded] = useState(false);

    const handleAdd = () => {
        setAdded(true);
        setTimeout(() => setAdded(false), 1800);
    };

    return (
        <div className="group relative flex flex-col bg-white border border-[#E8D9C8] rounded-2xl overflow-hidden hover:border-[#C8793A]/40 hover:shadow-xl hover:shadow-[#C8793A]/10 hover:-translate-y-1 transition-all duration-300">

            {/* Image */}
            <div className="relative w-full h-40 bg-[#FFF5EA] overflow-hidden">
                {!imgErr ? (
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 20vw"
                        className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                        onError={() => setImgErr(true)}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl">
                        {'🛒'}
                    </div>
                )}

                {/* Scan badge on hover */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                        href={`/product/${product.id}`}
                        className="flex items-center gap-1 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-[10px] font-bold text-[#C8793A] border border-[#C8793A]/20 shadow-sm"
                    >
                        <ScanLine size={10} />
                        QR
                    </Link>
                </div>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-2 p-3 flex-1">
                <p className="text-[#2C1A0E] font-semibold text-sm leading-snug line-clamp-2 min-h-[2.5rem]">
                    {product.name}
                </p>

                <div className="flex items-center justify-between mt-auto pt-1">
                    <div className="flex items-baseline gap-0.5">
                        <span className="text-[#C8793A] font-black text-xl leading-none">{product.price}</span>
                        <span className="text-[#8C7B6E] text-[10px] font-medium mr-0.5">جنيه</span>
                    </div>

                    <button
                        onClick={handleAdd}
                        className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-300 ${added
                                ? 'bg-[#4A9B6F] text-white scale-95'
                                : 'bg-[#C8793A]/10 hover:bg-[#C8793A] text-[#C8793A] hover:text-white'
                            }`}
                    >
                        {added ? <>✓ تمام</> : <><ShoppingCart size={11} />اشتري</>}
                    </button>
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────
   Tab Button
───────────────────────────────────────── */
function TabBtn({
    cat,
    active,
    count,
    onClick,
}: {
    cat: (typeof CATEGORIES)[number]; // ✅ Fix 2: [number] الأصح لـ array element type
    active: boolean;
    count: number;
    onClick: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className={`relative flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-bold whitespace-nowrap transition-all duration-300 ${active
                    ? 'bg-[#C8793A] text-white shadow-lg shadow-[#C8793A]/30 scale-105'
                    : 'bg-white text-[#2C1A0E] border border-[#E8D9C8] hover:border-[#C8793A]/40 hover:bg-[#FFF5EA]'
                }`}
        >
            <span className={active ? 'text-white' : 'text-[#C8793A]'}>{cat.icon}</span>
            {cat.label}
            <span
                className={`text-[10px] font-black px-1.5 py-0.5 rounded-full ${active ? 'bg-white/25 text-white' : 'bg-[#F0A96B]/20 text-[#C8793A]'
                    }`}
            >
                {count}
            </span>
        </button>
    );
}

/* ─────────────────────────────────────────
   Products Page
───────────────────────────────────────── */
export default function ProductsPage() {
    const [activeTab, setActiveTab] = useState<Category>('all');
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default');

    /* ✅ Fix 3: import صريح لـ MOCK_PRODUCTS + النوع Product على كل p */
    const products = useMemo((): Product[] => {
        let list: Product[] =
            activeTab === 'all'
                ? MOCK_PRODUCTS
                : MOCK_PRODUCTS.filter((p: Product) => p.cat === activeTab);

        if (search.trim()) {
            const q = search.trim().toLowerCase();
            list = list.filter((p: Product) => p.name.toLowerCase().includes(q));
        }

        if (sortBy === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
        if (sortBy === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);

        return list;
    }, [activeTab, search, sortBy]);

    /* ✅ Fix 4: النوع صريح في الـ parameter */
    const countFor = (id: Category): number =>
        id === 'all'
            ? MOCK_PRODUCTS.length
            : MOCK_PRODUCTS.filter((p: Product) => p.cat === id).length;

    return (
        <div className="min-h-screen bg-[#FDF8F3] pt-20 pb-16" dir="rtl">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                    <div>
                        <span className="text-[#C8793A] text-xs font-bold tracking-widest uppercase">A.Sa3d Café</span>
                        <h1 className="text-3xl md:text-4xl font-black text-[#2C1A0E] mt-1">قائمة المنتجات</h1>
                        <p className="text-[#8C7B6E] text-sm mt-1">
                            {MOCK_PRODUCTS.length} منتج متاح — اسكن الـ QR وادفع على طول
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Star size={14} className="text-[#C8793A]" />
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                            className="text-sm font-semibold text-[#2C1A0E] bg-white border border-[#E8D9C8] rounded-xl px-3 py-2 outline-none focus:border-[#C8793A] cursor-pointer"
                        >
                            <option value="default">الترتيب الافتراضي</option>
                            <option value="price-asc">السعر: من الأقل</option>
                            <option value="price-desc">السعر: من الأعلى</option>
                        </select>
                    </div>
                </div>

                {/* Search */}
                <div className="relative mb-6">
                    <Search size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#B8A99A] pointer-events-none" />
                    <input
                        type="text"
                        placeholder="ابحث عن منتج..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-4 pr-11 py-3.5 rounded-2xl border border-[#E8D9C8] bg-white/80 text-sm text-[#2C1A0E] placeholder:text-[#B8A99A] outline-none focus:border-[#C8793A] focus:ring-2 focus:ring-[#C8793A]/12 transition-all"
                    />
                    {search && (
                        <button
                            onClick={() => setSearch('')}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B8A99A] hover:text-[#C8793A] transition-colors text-lg leading-none"
                        >
                            ×
                        </button>
                    )}
                </div>

                {/* Tabs */}
                <div className="flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-hide">
                    {CATEGORIES.map((cat) => (
                        <TabBtn
                            key={cat.id}
                            cat={cat}
                            active={activeTab === cat.id}
                            count={countFor(cat.id)}
                            onClick={() => setActiveTab(cat.id)}
                        />
                    ))}
                </div>

                {/* Active label */}
                {search ? (
                    <div className="flex items-center gap-2 mb-5">
                        <Search size={14} className="text-[#C8793A]" />
                        <span className="text-sm text-[#8C7B6E]">
                            نتائج البحث عن{' '}
                            <strong className="text-[#2C1A0E]">&ldquo;{search}&rdquo;</strong>
                            {' '}— {products.length} منتج
                        </span>
                    </div>
                ) : (
                    <div className="flex items-center gap-2 mb-5">
                        <div className="w-1.5 h-5 bg-[#C8793A] rounded-full" />
                        <span className="text-sm font-bold text-[#2C1A0E]">
                            {CATEGORIES.find((c) => c.id === activeTab)?.label}
                        </span>
                        <span className="text-sm text-[#8C7B6E]">— {products.length} منتج</span>
                    </div>
                )}

                {/* Grid */}
                {products.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                        {products.map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-24 text-center">
                        <div className="w-20 h-20 rounded-3xl bg-[#FFF5EA] border border-[#E8D9C8] flex items-center justify-center text-4xl mb-4">
                            🔍
                        </div>
                        <h3 className="text-[#2C1A0E] font-bold text-lg mb-1">مفيش نتائج</h3>
                        <p className="text-[#8C7B6E] text-sm mb-6">
                            {search ? `مفيش منتج بيطابق "${search}"` : 'مفيش منتجات في هذه الفئة دلوقتي'}
                        </p>
                        <button
                            onClick={() => { setSearch(''); setActiveTab('all'); }}
                            className="px-6 py-2.5 bg-[#C8793A] text-white rounded-xl font-bold text-sm hover:bg-[#9E5A22] transition-colors"
                        >
                            عرض كل المنتجات
                        </button>
                    </div>
                )}

                {/* CTA Banner */}
                {products.length > 0 && (
                    <div className="mt-12 p-6 rounded-3xl bg-gradient-to-br from-[#2C1A0E] to-[#4A2C12] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
                        <div>
                            <p className="text-white font-black text-lg">عايز تشتري؟</p>
                            <p className="text-[#E8D9C8]/60 text-sm">اسكن الـ QR الموجود على المنتج وادفع على طول</p>
                        </div>
                        <Link
                            href="/scan"
                            className="flex items-center gap-2 px-6 py-3 bg-[#C8793A] hover:bg-[#F0A96B] text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#C8793A]/40 whitespace-nowrap"
                        >
                            <ScanLine size={16} />
                            ابدأ المسح
                        </Link>
                    </div>
                )}

            </div>
        </div>
    );
}