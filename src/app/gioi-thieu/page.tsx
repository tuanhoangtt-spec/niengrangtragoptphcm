// app/gioi-thieu/page.tsx
import type { Metadata } from 'next'
import SiteHeader from '../../components/site-header'
import SiteFooter from '../../components/site-footer'
import ContactWidgets from '../../components/contact-widgets'

const SITE_URL = 'https://nhakhoaquan10.vercel.app'

export const metadata: Metadata = {
  title: 'Giới Thiệu Nha Khoa AVA - Nha Khoa Uy Tín Quận 10',
  description:
    'Nha khoa AVA - địa chỉ duy nhất tại 283/91 Cách Mạng Tháng 8, Quận 10, TP.HCM. Giấy phép 04405/SYT-GPHĐ, đội ngũ bác sĩ chuyên môn nhiều năm kinh nghiệm.',
  alternates: { canonical: `${SITE_URL}/gioi-thieu` },
}

export default function GioiThieu() {
  return (
    <>
      <SiteHeader />

      <main className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-[#6B8C2A] font-bold text-sm tracking-wide mb-2">GIỚI THIỆU</p>
        <h1 className="text-4xl font-extrabold text-[#3F5219] mb-6">Nha khoa AVA</h1>

        <p className="text-lg text-[#3A4F4C] mb-6 leading-relaxed">
          Nha khoa AVA là một trong những địa chỉ chăm sóc và làm đẹp răng miệng được nhiều khách hàng
          tại TP.HCM tin chọn. Chúng tôi hướng đến việc mang lại lợi ích thực sự cho khách hàng bằng cách
          không ngừng cập nhật công nghệ và phương pháp điều trị hiện đại, đồng thời giữ vững nguyên tắc
          minh bạch trong tư vấn và chi phí.
        </p>

        <div className="bg-[#F6F9EF] rounded-2xl p-6 md:p-8 mb-10">
          <p className="font-bold text-[#3F5219] mb-3">
            Nha khoa AVA chỉ có duy nhất một địa chỉ, không thuộc bất kỳ hệ thống hay chuỗi nha khoa nào khác.
          </p>
          <ul className="space-y-2 text-sm text-[#3A4F4C]">
            <li><span className="font-semibold">Địa chỉ duy nhất:</span> 283/91 Cách Mạng Tháng 8, Phường Hòa Hưng, Quận 10, TP.HCM</li>
            <li><span className="font-semibold">Đơn vị chủ quản:</span> Công ty TNHH Nha khoa Thẩm mỹ AVA</li>
            <li><span className="font-semibold">Mã số thuế:</span> 0312093828</li>
            <li><span className="font-semibold">Giấy phép hoạt động:</span> 04405/SYT-GPHĐ</li>
            <li><span className="font-semibold">Bác sĩ Phạm Việt Hùng</span> — Số chứng chỉ hành nghề: 008280/HCM-CCHN</li>
            <li><span className="font-semibold">Bác sĩ Nguyễn Bảo Ngọc</span> — Số chứng chỉ hành nghề: 007048/HCM-CCHN</li>
          </ul>
        </div>

        <h2 className="text-2xl font-extrabold text-[#3F5219] mb-4">Bác sĩ phụ trách chuyên môn</h2>
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          <div className="bg-white border border-[#E1EDC9] rounded-2xl p-6">
            <div className="w-16 h-16 rounded-full bg-[#89b135] text-white flex items-center justify-center font-extrabold text-xl mb-4">
              PVH
            </div>
            <h3 className="font-bold text-lg text-[#3F5219]">BS. Phạm Việt Hùng</h3>
            <p className="text-sm text-[#5C6E6B] mb-1">Hơn 16 năm kinh nghiệm trực tiếp điều trị</p>
            <p className="text-sm text-[#5C6E6B]">CCHN: 008280/HCM-CCHN</p>
          </div>
          <div className="bg-white border border-[#E1EDC9] rounded-2xl p-6">
            <div className="w-16 h-16 rounded-full bg-[#89b135] text-white flex items-center justify-center font-extrabold text-xl mb-4">
              NBN
            </div>
            <h3 className="font-bold text-lg text-[#3F5219]">BS. Nguyễn Bảo Ngọc</h3>
            <p className="text-sm text-[#5C6E6B] mb-1">Bác sĩ điều trị tại Nha khoa AVA</p>
            <p className="text-sm text-[#5C6E6B]">CCHN: 007048/HCM-CCHN</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a href="tel:02822066666" className="bg-[#FF6B4A] hover:bg-[#E85535] text-white font-semibold px-6 py-3 rounded-full transition">
            Gọi ngay để đặt lịch
          </a>
          <a href="/bang-gia" className="bg-white border-2 border-[#89b135] text-[#5C7A24] font-semibold px-6 py-3 rounded-full hover:bg-[#F1F7E4] transition">
            Xem bảng giá
          </a>
        </div>
      </main>

      <SiteFooter />
      <ContactWidgets />
    </>
  )
}
