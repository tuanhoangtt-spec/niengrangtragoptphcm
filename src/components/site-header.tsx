// components/site-header.tsx
// Header dùng chung cho các trang: trang chủ, giới thiệu, bảng giá, case hoàn thành, tin tức...
// Cách dùng: import SiteHeader from '../components/site-header' rồi đặt <SiteHeader /> đầu trang.

export default function SiteHeader() {
  return (
    <>
      <div className="bg-[#3F5219] text-white text-sm">
        <div className="max-w-6xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <span>283/91 Cách Mạng Tháng 8, P. Hòa Hưng, Quận 10, TP.HCM</span>
          <a href="tel:02822066666" className="font-semibold text-[#C6E38A] hover:text-white">
            Hotline: 028 2206 6666
          </a>
        </div>
      </div>

      <header className="border-b border-[#E1EDC9] sticky top-0 bg-white/95 backdrop-blur z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#3F5219] text-white flex items-center justify-center font-extrabold text-lg">
              A
            </div>
            <span className="font-extrabold text-xl tracking-tight">
              NHA KHOA <span className="text-[#6B8C2A]">AVA</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#3A4F4C]">
            <a href="/gioi-thieu" className="hover:text-[#6B8C2A]">Giới thiệu</a>
            <a href="/bang-gia" className="hover:text-[#6B8C2A]">Bảng giá</a>
            <a href="/case-hoan-thanh" className="hover:text-[#6B8C2A]">Case đã hoàn thành</a>
            <a href="/tin-tuc" className="hover:text-[#6B8C2A]">Tin tức</a>
            <a href="/#lien-he" className="hover:text-[#6B8C2A]">Liên hệ</a>
          </nav>
          
            href="tel:02822066666"
            className="bg-[#FF6B4A] hover:bg-[#E85535] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition"
          >
            Đặt lịch khám
          </a>
        </div>
      </header>
    </>
  )
}