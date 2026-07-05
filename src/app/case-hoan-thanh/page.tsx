// app/case-hoan-thanh/page.tsx
// LƯU Ý: các case dưới đây dùng ảnh giữ chỗ (placeholder). Hãy thay bằng ảnh thật
// (ảnh trước/sau đã có sự đồng ý của khách hàng) khi đưa lên chính thức.

import type { Metadata } from 'next'
import SiteHeader from '../../components/site-header'
import SiteFooter from '../../components/site-footer'
import ContactWidgets from '../../components/contact-widgets'

const SITE_URL = 'https://nhakhoaquan10.vercel.app'

export const metadata: Metadata = {
  title: 'Case Đã Hoàn Thành - Nha Khoa AVA Quận 10',
  description:
    'Hình ảnh các ca điều trị thực tế đã hoàn thành tại Nha khoa AVA: cấy ghép Implant, niềng răng, bọc răng sứ thẩm mỹ tại Quận 10, TP.HCM.',
  alternates: { canonical: `${SITE_URL}/case-hoan-thanh` },
}

type CaseItem = { title: string; image: string }
type CaseGroup = { title: string; cases: CaseItem[] }

const caseGroups: CaseGroup[] = [
  {
    title: 'Cấy ghép Implant',
    cases: [
      { title: 'Cấy ghép Implant - phục hồi răng mất', image: '/assets/cases/implant-1.jpg' },
      { title: 'Cấy ghép Implant nhiều răng liền kề', image: '/assets/cases/implant-2.jpg' },
      { title: 'Cấy ghép Implant toàn hàm (All-on)', image: '/assets/cases/implant-3.jpg' },
    ],
  },
  {
    title: 'Chỉnh hình răng - Niềng răng',
    cases: [
      { title: 'Niềng răng chen chúc với mắc cài kim loại', image: '/assets/cases/nieng-1.jpg' },
      { title: 'Niềng răng điều trị cắn chìa, hô', image: '/assets/cases/nieng-2.jpg' },
      { title: 'Niềng răng điều trị cắn chéo, chen chúc', image: '/assets/cases/nieng-3.jpg' },
      { title: 'Chỉnh nha can thiệp sớm cho trẻ em', image: '/assets/cases/nieng-4.jpg' },
    ],
  },
  {
    title: 'Phục hình răng sứ',
    cases: [
      { title: 'Phục hình răng cửa gãy do tai nạn', image: '/assets/cases/suchat-1.jpg' },
      { title: 'Cải thiện nụ cười với mặt dán sứ (Veneer)', image: '/assets/cases/suchat-2.jpg' },
      { title: 'Bọc răng sứ cải thiện màu răng nhiễm kháng sinh', image: '/assets/cases/suchat-3.jpg' },
    ],
  },
]

export default function CaseHoanThanh() {
  return (
    <>
      <SiteHeader />

      <main className="max-w-6xl mx-auto px-4 py-16">
        <p className="text-[#6B8C2A] font-bold text-sm tracking-wide mb-2">HÌNH ẢNH THỰC TẾ</p>
        <h1 className="text-4xl font-extrabold text-[#3F5219] mb-4">Case đã hoàn thành tại Nha khoa AVA</h1>
        <p className="text-[#3A4F4C] mb-12 max-w-2xl">
          Một số ca điều trị thực tế đã hoàn thành tại Nha khoa AVA, Quận 10. Kết quả điều trị có thể
          khác nhau tùy tình trạng răng miệng của từng khách hàng.
        </p>

        <div className="space-y-14">
          {caseGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-2xl font-extrabold text-[#3F5219] mb-5">{group.title}</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                {group.cases.map((c) => (
                  <div key={c.title} className="bg-[#F6F9EF] rounded-2xl overflow-hidden">
                    <div className="aspect-[4/3] bg-[#E7F2D2] flex items-center justify-center text-[#89b135]">
                      {/* Thay bằng: <img src={c.image} alt={c.title} className="w-full h-full object-cover" /> */}
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 2c-2.5 0-4 1.5-5 1.5S5 3 3.5 3C2 3 2 5 2 6c0 3 1 5 1.5 8 .3 1.8 1 4 2 4 1.2 0 1.3-2.5 2-4.5.4-1 .8-1.5 1.5-1.5s1.1.5 1.5 1.5c.7 2 .8 4.5 2 4.5 1 0 1.7-2.2 2-4C15 11 16 9 16 6c0-1-0-3-1.5-3-1.5 0-2.5.5-2.5.5S14.5 2 12 2Z" />
                      </svg>
                    </div>
                    <div className="p-4">
                      <p className="font-medium text-sm text-[#3A4F4C]">{c.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#F6F9EF] rounded-2xl p-8 mt-14 text-center">
          <h3 className="text-xl font-extrabold text-[#3F5219] mb-2">Bạn muốn có kết quả tương tự?</h3>
          <p className="text-[#3A4F4C] mb-5">Đặt lịch tư vấn và chụp phim miễn phí ngay hôm nay.</p>
          <a href="tel:02822066666" className="inline-block bg-[#FF6B4A] hover:bg-[#E85535] text-white font-semibold px-8 py-3.5 rounded-full transition">
            Gọi 028 2206 6666
          </a>
        </div>
      </main>

      <SiteFooter />
      <ContactWidgets />
    </>
  )
}
