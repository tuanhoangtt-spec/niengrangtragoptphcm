// src/components/FloatingContact.tsx
// Nút liên hệ nổi: Gọi điện (nhấp nháy) + Zalo, góc dưới bên phải màn hình.

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* Nút gọi điện - có hiệu ứng nhấp nháy */}
      
        href="tel:02822066666"
        aria-label="Gọi hotline Nha khoa AVA"
        className="relative flex items-center justify-center w-14 h-14"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#FF6B4A] opacity-75 animate-ping"></span>
        <span className="relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#FF6B4A] text-white shadow-lg hover:scale-105 transition-transform">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
          </svg>
        </span>
      </a>

      {/* Nút Zalo */}
      
        href="https://zalo.me/0388888272"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nhắn tin qua Zalo"
        className="w-14 h-14 rounded-full bg-[#0068FF] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform font-extrabold text-sm"
      >
        Zalo
      </a>
    </div>
  )
}