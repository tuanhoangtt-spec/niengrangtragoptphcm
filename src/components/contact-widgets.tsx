// components/contact-widgets.tsx
// Widget liên hệ nổi: Gọi hotline / Nhắn Zalo / Nhắn Messenger
// Cách dùng: import ContactWidgets from '../components/contact-widgets'
// rồi đặt <ContactWidgets /> trong app/layout.tsx (để hiện trên MỌI trang)
// hoặc trong từng app/*/page.tsx (chỉ hiện ở trang đó).

export default function ContactWidgets() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a
        href="tel:02822066666"
        aria-label="Gọi hotline Nha khoa AVA"
        className="w-14 h-14 rounded-full bg-[#FF6B4A] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
        </svg>
      </a>

      <a
        href="https://zalo.me/0388888272"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nhắn tin qua Zalo"
        className="w-14 h-14 rounded-full bg-[#0068FF] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform font-extrabold text-sm"
      >
        Zalo
      </a>

      <a
        href="https://www.facebook.com/NhaKhoaAVA/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nhắn tin qua Facebook Messenger"
        className="w-14 h-14 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.15 2 11.26c0 2.9 1.44 5.49 3.7 7.19V22l3.38-1.86c.9.25 1.86.38 2.92.38 5.52 0 10-4.15 10-9.26C22 6.15 17.52 2 12 2zm1.02 12.47-2.55-2.72-4.98 2.72 5.48-5.81 2.6 2.72 4.93-2.72-5.48 5.81z" />
        </svg>
      </a>
    </div>
  )
}
