// app/bang-gia/page.tsx
import type { Metadata } from 'next'
import SiteHeader from '../../components/site-header'
import SiteFooter from '../../components/site-footer'
import ContactWidgets from '../../components/contact-widgets'

const SITE_URL = 'https://nhakhoaquan10.vercel.app'

export const metadata: Metadata = {
  title: 'Bảng Giá Nha Khoa AVA - Nha Khoa Uy Tín Quận 10',
  description:
    'Bảng giá tham khảo Nha khoa AVA Quận 10: khám và tư vấn miễn phí, niềng răng, cấy ghép Implant, bọc răng sứ, trám răng, tẩy trắng răng. Cập nhật mới nhất.',
  alternates: { canonical: `${SITE_URL}/bang-gia` },
}

type PriceItem = { name: string; price: string }
type PriceGroup = { title: string; items: PriceItem[] }

const priceGroups: PriceGroup[] = [
  {
    title: 'Chẩn đoán',
    items: [
      { name: 'Khám tổng quát + Panorex + Vệ sinh răng', price: '500.000 đ' },
      { name: 'Phim CT Scanner + khám tổng quát + Vệ sinh răng', price: '1.000.000 đ' },
      { name: 'Máng flour + thuốc ngừa biến chứng cho bệnh nhân ung thư', price: '800.000 đ' },
    ],
  },
  {
    title: 'Nha chu',
    items: [
      { name: 'Cạo vôi - đánh bóng răng 2 hàm', price: '500.000 đ' },
      { name: 'Tái tạo nụ cười hở lợi (nướu)', price: '25.000.000 đ / 1 hàm' },
      { name: 'Điều trị dứt điểm viêm nướu (do mảng bám)', price: '1.000.000 đ' },
      { name: 'Điều trị viêm nha chu 1 hàm', price: '6.000.000 đ' },
      { name: 'Điều trị viêm nha chu 2 hàm', price: '10.000.000 đ' },
      { name: 'Lật vạt, làm dài chân răng', price: '2.500.000 đ / 1 răng' },
      { name: 'Ghép nướu, mô liên kết tái tạo', price: '300 USD / 1 răng' },
      { name: 'Ghép xương', price: '300 USD / 1 răng' },
      { name: 'Combo: Ghép nướu + Ghép xương', price: '500 USD / 1 răng' },
    ],
  },
  {
    title: 'Nhổ răng - Tiểu phẫu',
    items: [
      { name: 'Nhổ răng trước - răng cối nhỏ', price: '1.000.000 đ' },
      { name: 'Nhổ răng bảo tồn và ghép xương', price: '3.000.000 đ' },
      { name: 'Nhổ răng hàm - răng thường', price: '1.000.000 đ' },
      { name: 'Tiểu phẫu răng khôn hàm trên (mọc thẳng)', price: '1.000.000 đ' },
      { name: 'Tiểu phẫu răng khôn hàm trên mọc lệch 90 độ', price: '5.000.000 đ' },
      { name: 'Tiểu phẫu răng khôn hàm dưới mọc thẳng', price: '4.000.000 đ' },
      { name: 'Tiểu phẫu răng khôn mọc ngầm, lệch', price: '5.000.000 đ' },
    ],
  },
  {
    title: 'Trám răng - Nội nha',
    items: [
      { name: 'Trám răng thẩm mỹ mặt nhai (xoang I)', price: '500.000 đ' },
      { name: 'Trám thẩm mỹ mặt bên (xoang II, III)', price: '600.000 đ' },
      { name: 'Trám thẩm mỹ mặt bên răng cửa (xoang IV)', price: '800.000 đ' },
      { name: 'Trám thẩm mỹ khe hở giữa', price: '800.000 đ' },
      { name: 'Trám thẩm mỹ cổ răng (xoang V)', price: '500.000 đ' },
      { name: 'Chữa tủy răng trước (bao gồm trám)', price: '6.000.000 đ' },
      { name: 'Chữa tủy răng cối nhỏ (bao gồm trám)', price: '8.000.000 đ' },
      { name: 'Chữa tủy răng cối lớn - răng hàm (bao gồm trám)', price: '10.000.000 đ' },
      { name: 'Nội nha răng trẻ em + trám', price: '600.000 đ + trám 300.000 đ' },
      { name: 'Nội nha lại', price: 'Cộng thêm 2.000.000 đ' },
    ],
  },
  {
    title: 'Tẩy trắng răng',
    items: [
      { name: 'Tẩy trắng răng tại nhà', price: '1.500.000 đ' },
      { name: 'Tẩy trắng răng bằng Laser (USA)', price: '3.500.000 đ' },
      { name: 'Tẩy trắng công nghệ BleachBright (USA)', price: '3.500.000 đ' },
      { name: 'Tẩy trắng công nghệ ZOOM (USA)', price: '5.000.000 đ' },
      { name: 'Thuốc tẩy trắng tại nhà Nite White', price: '250.000 đ / tuýp' },
      { name: 'Máng tẩy tại nhà (2 hàm, làm lại)', price: '400.000 đ' },
    ],
  },
  {
    title: 'Phục hình cố định',
    items: [
      { name: 'Mão kim loại', price: '1.000.000 đ' },
      { name: 'Mão sứ kim loại không Nikel - Beri', price: '1.500.000 đ' },
      { name: 'Mão Titanium', price: '1.000.000 đ' },
      { name: 'Sứ Titanium', price: '2.500.000 đ' },
      { name: 'Inlay/Onlay sứ Empress CAD, E.max CAD', price: '6.000.000 đ' },
      { name: 'Mão quý kim, sứ quý kim', price: '8.000.000 đ' },
      { name: 'Veneer sứ CAD/CAM Lava 3M (USA)', price: '10.000.000 đ' },
      { name: 'Veneer sứ CAD/CAM Ivoclar Vivadent (Thụy Sỹ)', price: '10.000.000 đ' },
      { name: 'Mão toàn sứ Zirconia/E.max CAD (Ivoclar Vivadent)', price: '10.000.000 đ' },
      { name: 'Răng sứ HT Smile (Đức)', price: '6.000.000 đ' },
      { name: 'Mão toàn sứ Cercon-HT (Đức)', price: '8.000.000 đ' },
    ],
  },
  {
    title: 'Phục hình Implant',
    items: [
      { name: 'Răng tạm tức thì trên Implant (PMMA)', price: '1.500.000 đ / răng' },
      { name: 'Răng tạm tức thì trên All-on', price: '1.000 USD / hàm' },
      { name: 'Phục hình sau cùng răng sứ trên All-on', price: '4.000 USD / hàm' },
      { name: 'Implant Hàn Quốc (Biotem, Kisplant)', price: '500 USD' },
      { name: 'Implant Hàn Quốc + Mỹ (Dentium, Hiossen)', price: '600 USD' },
      { name: 'Implant Ý (JD)', price: '750 USD' },
      { name: 'Implant Pháp (Euroteknika)', price: '850 USD' },
      { name: 'Implant Pháp (Kontact)', price: '850 USD' },
      { name: 'Implant Đức (Ritter)', price: '1.200 USD' },
      { name: 'Implant Đức - Thụy Sỹ (SIC)', price: '1.150 USD' },
      { name: 'Implant Thụy Điển (Nobel Biocare)', price: '1.200 USD' },
      { name: 'Implant Thụy Sỹ (Straumann)', price: '1.200 USD' },
    ],
  },
  {
    title: 'Phục hình tháo lắp',
    items: [
      { name: 'Răng sứ tháo lắp', price: '1.000.000 đ' },
      { name: 'Răng giả tháo lắp nhựa', price: '800.000 đ' },
      { name: 'Răng giả tháo lắp toàn hàm nhựa (1 hàm)', price: '20.000.000 đ' },
      { name: 'Nền hàm loại 1', price: '2.000.000 đ' },
      { name: 'Nền hàm loại 2', price: '2.500.000 đ' },
      { name: 'Nền hàm khung liên kết', price: '1.500.000 đ' },
      { name: 'Mắt cài khung liên kết', price: '500.000 đ' },
      { name: 'Mắt cài bi', price: '1.200.000 đ' },
    ],
  },
  {
    title: 'Răng trẻ em',
    items: [
      { name: 'Cạo vôi răng', price: '300.000 đ' },
      { name: 'Nhổ răng tê bôi', price: '50.000 đ' },
      { name: 'Nhổ răng (gây tê)', price: '300.000 đ' },
      { name: 'Trám Composite thẩm mỹ', price: '500.000 đ' },
      { name: 'Trám bít hố rãnh Sealant (ngừa sâu răng)', price: '300.000 đ' },
      { name: 'Nội nha (chưa tính trám)', price: '600.000 đ' },
    ],
  },
  {
    title: 'Chỉnh hình răng (niềng răng)',
    items: [
      { name: 'Khám và tư vấn', price: 'Miễn phí' },
      { name: 'Chỉnh hình răng trẻ em (2 giai đoạn, 8-14 tuổi)', price: '40.000.000 đ' },
      { name: 'Mắc cài kim loại Victory 3M (cấp độ 1-3)', price: '15 - 35 - 45 triệu đ' },
      { name: 'Mắc cài tự buộc Smart Clip 3M (cấp độ 1-3)', price: '30 - 40 - 50 triệu đ' },
      { name: 'Mắc cài sứ thẩm mỹ (cấp độ 1-3)', price: '40 - 50 - 60 triệu đ' },
      { name: 'Mắc cài sứ thẩm mỹ Smart Clip (cấp độ 1-3)', price: '50 - 60 - 70 triệu đ' },
      { name: 'Mắc cài mặt trong (mặt lưỡi)', price: '80.000.000 đ' },
      { name: 'Niềng trong suốt Invisalign (cấp độ 1-3)', price: '50 - 80 - 120 triệu đ' },
      { name: 'Mini-screw', price: '2.000.000 đ / cái' },
      { name: 'Khí cụ duy trì (khay trong) - 1 hàm', price: '1.000.000 đ' },
      { name: 'Khí cụ duy trì Hawley - 1 hàm', price: '2.000.000 đ' },
    ],
  },
]

export default function BangGia() {
  return (
    <>
      <SiteHeader />

      <main className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-[#6B8C2A] font-bold text-sm tracking-wide mb-2">BẢNG GIÁ THAM KHẢO</p>
        <h1 className="text-4xl font-extrabold text-[#3F5219] mb-4">Bảng giá Nha khoa AVA</h1>
        <p className="text-[#3A4F4C] mb-2">
          Khám và tư vấn miễn phí. Giá tham khảo, quy đổi theo tiền VNĐ. Sau khi bác sĩ thăm khám sẽ tư
          vấn chi phí cụ thể theo từng trường hợp và chất liệu điều trị.
        </p>
        <p className="text-sm text-[#8A9A87] mb-10">Cập nhật: tháng 7/2026</p>

        <div className="space-y-10">
          {priceGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-xl font-extrabold text-[#3F5219] mb-3 pb-2 border-b-2 border-[#89b135]">
                {group.title}
              </h2>
              <table className="w-full text-sm">
                <tbody>
                  {group.items.map((item) => (
                    <tr key={item.name} className="border-b border-[#E1EDC9] last:border-0">
                      <td className="py-2.5 pr-4 text-[#3A4F4C]">{item.name}</td>
                      <td className="py-2.5 text-right font-semibold text-[#3F5219] whitespace-nowrap">
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>

        <div className="bg-[#F6F9EF] rounded-2xl p-6 mt-10">
          <p className="text-sm text-[#3A4F4C]">
            <span className="font-semibold text-[#3F5219]">Lưu ý:</span> Giá trên tùy thuộc vào từng loại
            hình điều trị và chất liệu sử dụng. Sau khi thăm khám, bác sĩ sẽ tư vấn chi phí chính xác cho
            từng trường hợp cụ thể.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-8">
          <a href="tel:02822066666" className="bg-[#FF6B4A] hover:bg-[#E85535] text-white font-semibold px-6 py-3 rounded-full transition">
            Gọi để được tư vấn giá cụ thể
          </a>
          <a href="https://zalo.me/0388888272" target="_blank" rel="noopener noreferrer" className="bg-[#0068FF] hover:bg-[#0055D4] text-white font-semibold px-6 py-3 rounded-full transition">
            Nhắn Zalo
          </a>
        </div>
      </main>

      <SiteFooter />
      <ContactWidgets />
    </>
  )
}
