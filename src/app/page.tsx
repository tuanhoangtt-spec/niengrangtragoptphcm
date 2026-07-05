// src/app/page.tsx
// Trang chủ Nha khoa AVA - tích hợp nội dung SEO chi tiết cho 4 từ khóa:
// "nha khoa quận 10", "niềng răng quận 10", "niềng răng trả góp tphcm", "nha khoa uy tín quận 10"
// Cấu trúc: semantic HTML (header/main/section/article), duy nhất 1 thẻ H1,
// H2/H3 phân cấp logic, JSON-LD LocalBusiness + FAQPage.

import type { Metadata } from 'next'
import SiteHeader from '../components/site-header'
import SiteFooter from '../components/site-footer'
import ContactWidgets from '../components/contact-widgets'

const SITE_URL = 'https://nhakhoaquan10.vercel.app' // đổi lại nếu bạn dùng domain riêng

export const metadata: Metadata = {
  title: 'Nha Khoa AVA - Địa Chỉ Nha Khoa Uy Tín Quận 10 | Khám & Chụp Phim Miễn Phí',
  description:
    'Tìm nha khoa uy tín Quận 10? Nha Khoa AVA (BS. Phạm Việt Hùng - 16+ năm kinh nghiệm) chuyên niềng răng Quận 10, cắm Implant. Hỗ trợ niềng răng trả góp TPHCM 0% lãi suất.',
  alternates: { canonical: SITE_URL },
}

const chinhNhaMethods = [
  {
    method: 'Mắc cài Kim loại',
    feature: 'Chi phí tối ưu, lực kéo ổn định, hiệu quả cao với ca khó.',
    target: 'Học sinh, sinh viên, người chú trọng hiệu quả.',
  },
  {
    method: 'Mắc cài Sứ',
    feature: 'Màu sắc trùng màu răng, thẩm mỹ cao, không gây kích ứng.',
    target: 'Người làm công việc giao tiếp, văn phòng.',
  },
  {
    method: 'Niềng trong suốt Invisalign',
    feature: 'Tháo lắp tiện lợi, vô hình khi giao tiếp, công nghệ quét dấu răng 3D.',
    target: 'Doanh nhân, người bận rộn, ưu tiên sự thoải mái.',
  },
]

const quyTrinhSteps = [
  'Khám & Chụp phim miễn phí',
  'Phân tích chỉ số Cephalometric',
  'Lập kế hoạch dịch chuyển răng trên phần mềm',
  'Tiến hành gắn mắc cài',
  'Đồng hành tái khám định kỳ',
]

const faqs = [
  {
    question: 'Khám tư vấn và chụp phim tại Nha khoa AVA có mất phí không?',
    answer:
      'Hoàn toàn miễn phí cho lần thăm khám đầu tiên. Bác sĩ sẽ kiểm tra, chụp phim X-Quang và lên phác đồ chi tiết mà không bắt buộc bạn phải sử dụng dịch vụ ngay.',
  },
  {
    question: 'Chính sách niềng răng trả góp TPHCM tại AVA áp dụng cho những phương pháp nào?',
    answer:
      'Chương trình trả góp 0% áp dụng cho tất cả các dịch vụ chỉnh nha, bao gồm niềng mắc cài kim loại, mắc cài sứ và cả niềng răng trong suốt Invisalign.',
  },
  {
    question: 'Làm sao để đặt lịch khám cùng Bác sĩ Phạm Việt Hùng?',
    answer:
      'Bạn có thể liên hệ trực tiếp qua Hotline 028 2206 6666 hoặc nhắn tin Zalo 0388 888 272 để được nhân viên sắp xếp khung giờ ưu tiên, không phải chờ đợi.',
  },
]

// JSON-LD: LocalBusiness (Dentist) + FAQPage, gộp trong 1 @graph để Google liên kết đúng thực thể
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Dentist',
      '@id': `${SITE_URL}/#business`,
      name: 'Nha khoa AVA',
      image: `${SITE_URL}/assets/logo/ava-logo.jpg`,
      url: SITE_URL,
      telephone: '+842822066666',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '283/91 Cách Mạng Tháng 8',
        addressLocality: 'Phường Hòa Hưng, Quận 10',
        addressRegion: 'TP.HCM',
        addressCountry: 'VN',
      },
      taxID: '0312093828',
      hasMap: 'https://g.page/nhakhoava',
      sameAs: ['https://www.facebook.com/NhaKhoaAVA/', 'https://g.page/nhakhoava'],
      employee: {
        '@type': 'Physician',
        name: 'Bác sĩ Phạm Việt Hùng',
        medicalSpecialty: 'Dentistry',
        identifier: '008280/HCM-CCHN',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />

      <main>
        {/* HERO / H1 duy nhất trên trang */}
        <header className="max-w-4xl mx-auto px-4 pt-14 pb-10 text-center">
          <p className="inline-block bg-[#F1F7E4] text-[#5C7A24] text-xs font-bold tracking-wide px-3 py-1.5 rounded-full mb-5">
            NHA KHOA UY TÍN QUẬN 10 · TP.HCM
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-[#3F5219] mb-6">
            Nha Khoa AVA – Địa Chỉ Nha Khoa Uy Tín Quận 10 Chăm Sóc Nụ Cười Toàn Diện
          </h1>
          <p className="text-lg text-[#3A4F4C] leading-relaxed mb-8">
            Giữa hàng trăm phòng khám trên địa bàn thành phố, việc tìm kiếm một nha khoa uy tín Quận 10
            với đội ngũ bác sĩ giỏi, chi phí minh bạch là ưu tiên hàng đầu của mọi khách hàng. Tại Nha
            khoa AVA (283/91 Cách Mạng Tháng 8), chúng tôi kết hợp công nghệ chẩn đoán hiện đại cùng
            kinh nghiệm lâm sàng hơn 16 năm của Bác sĩ Phạm Việt Hùng, cam kết mang đến trải nghiệm điều
            trị an toàn, triệt để và không đau cho cả gia đình.{' '}
            <span className="font-semibold text-[#5C7A24]">
              Miễn phí 100% tư vấn và chụp phim X-Quang cho khách hàng thăm khám lần đầu.
            </span>
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="tel:02822066666"
              className="bg-[#FF6B4A] hover:bg-[#E85535] text-white font-semibold px-6 py-3.5 rounded-full transition"
            >
              Gọi ngay 028 2206 6666
            </a>
            <a
              href="https://zalo.me/0388888272"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-2 border-[#0068FF] text-[#0068FF] font-semibold px-6 py-3.5 rounded-full hover:bg-[#0068FF]/5 transition"
            >
              Nhắn Zalo đặt lịch
            </a>
          </div>
        </header>

        {/* Trust strip */}
        <section aria-label="Cam kết chất lượng" className="bg-[#3F5219] py-6">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-sm font-medium text-center">
            <div>✓ Cấp phép Sở Y tế</div>
            <div>✓ BS. 16+ năm kinh nghiệm</div>
            <div>✓ CT Cone Beam tại chỗ</div>
            <div>✓ Trả góp niềng răng 0%</div>
          </div>
        </section>

        {/* 4 Lý do tin chọn */}
        <section aria-labelledby="ly-do" className="max-w-6xl mx-auto px-4 py-20">
          <h2 id="ly-do" className="text-2xl md:text-3xl font-extrabold text-[#3F5219] mb-3">
            4 Lý Do Khách Hàng Tin Chọn Nha Khoa AVA Là Nha Khoa Uy Tín Quận 10
          </h2>
          <p className="text-[#3A4F4C] mb-10 max-w-2xl">
            Để định vị là một nha khoa Quận 10 đạt chuẩn y khoa hàng đầu, AVA không ngừng đầu tư vào
            quy trình và chất lượng điều trị dựa trên 4 trụ cột cốt lõi:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <article className="bg-[#F6F9EF] rounded-2xl p-6">
              <h3 className="font-bold text-lg text-[#3F5219] mb-2">Bác sĩ chuyên môn cao, minh bạch pháp lý</h3>
              <p className="text-sm text-[#5C6E6B]">
                Trực tiếp thăm khám bởi BS. Phạm Việt Hùng (CCHN số: 008280/HCM-CCHN) với hơn 16 năm
                kinh nghiệm thực chiến trong ngành Răng Hàm Mặt, định hướng điều trị bảo tồn tối đa
                răng thật.
              </p>
            </article>
            <article className="bg-[#F6F9EF] rounded-2xl p-6">
              <h3 className="font-bold text-lg text-[#3F5219] mb-2">Trang thiết bị chẩn đoán hiện đại</h3>
              <p className="text-sm text-[#5C6E6B]">
                Tích hợp máy chụp phim X-Quang CT Cone Beam ngay tại phòng khám, giúp chẩn đoán chính
                xác cấu trúc xương hàm mà khách hàng không cần di chuyển đi nơi khác.
              </p>
            </article>
            <article className="bg-[#F6F9EF] rounded-2xl p-6">
              <h3 className="font-bold text-lg text-[#3F5219] mb-2">Vô trùng chuẩn Bộ Y tế</h3>
              <p className="text-sm text-[#5C6E6B]">
                Áp dụng quy trình tiệt trùng khép kín, mỗi khách hàng được sử dụng một bộ dụng cụ riêng
                biệt, loại bỏ hoàn toàn rủi ro lây nhiễm chéo.
              </p>
            </article>
            <article className="bg-[#F6F9EF] rounded-2xl p-6">
              <h3 className="font-bold text-lg text-[#3F5219] mb-2">Minh bạch chi phí điều trị</h3>
              <p className="text-sm text-[#5C6E6B]">
                Bảng giá niêm yết rõ ràng, bác sĩ tư vấn đúng lộ trình, cam kết tuyệt đối không phát
                sinh chi phí phụ ngoài phác đồ đã thống nhất.
              </p>
            </article>
          </div>
        </section>

        {/* Niềng răng quận 10 */}
        <section aria-labelledby="nieng-rang" className="bg-[#F6F9EF] py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 id="nieng-rang" className="text-2xl md:text-3xl font-extrabold text-[#3F5219] mb-3">
              Chuyên Sâu Niềng Răng Quận 10 – Kiến Tạo Nụ Cười Chuẩn Tỷ Lệ Vàng
            </h2>
            <p className="text-[#3A4F4C] mb-8 max-w-2xl">
              Chỉnh nha là dịch vụ mũi nhọn tại AVA. Nếu bạn đang tìm kiếm giải pháp niềng răng Quận 10
              an toàn, không tái xô lệch, chúng tôi cung cấp đa dạng phác đồ cá nhân hóa cho từng tình
              trạng răng hô, móm, thưa, khấp khểnh.
            </p>

            {/* Bảng phương pháp - responsive: cuộn ngang trên di động */}
            <div className="overflow-x-auto -mx-4 px-4 mb-12">
              <table className="w-full min-w-[640px] bg-white rounded-2xl overflow-hidden text-sm">
                <thead>
                  <tr className="bg-[#3F5219] text-white text-left">
                    <th scope="col" className="py-3 px-4 font-semibold">Phương pháp chỉnh nha</th>
                    <th scope="col" className="py-3 px-4 font-semibold">Đặc điểm nổi bật</th>
                    <th scope="col" className="py-3 px-4 font-semibold">Đối tượng phù hợp</th>
                  </tr>
                </thead>
                <tbody>
                  {chinhNhaMethods.map((row, i) => (
                    <tr key={row.method} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F6F9EF]'}>
                      <th scope="row" className="py-3 px-4 font-semibold text-[#3F5219] text-left align-top whitespace-nowrap">
                        {row.method}
                      </th>
                      <td className="py-3 px-4 text-[#3A4F4C] align-top">{row.feature}</td>
                      <td className="py-3 px-4 text-[#3A4F4C] align-top">{row.target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-[#3F5219] mb-4">Quy trình niềng răng chuẩn y khoa tại AVA</h3>
            <ol className="grid sm:grid-cols-5 gap-4">
              {quyTrinhSteps.map((step, i) => (
                <li key={step} className="bg-white rounded-xl p-4 text-sm text-[#3A4F4C]">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#89b135] text-white text-xs font-bold mb-3">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Trả góp */}
        <section aria-labelledby="tra-gop" className="max-w-6xl mx-auto px-4 py-20">
          <h2 id="tra-gop" className="text-2xl md:text-3xl font-extrabold text-[#3F5219] mb-3">
            Chính Sách Niềng Răng Trả Góp TPHCM Lãi Suất 0% – Nhẹ Gánh Tài Chính
          </h2>
          <p className="text-[#3A4F4C] mb-8 max-w-2xl">
            Thấu hiểu rào cản chi phí của học sinh, sinh viên và người mới đi làm, Nha khoa AVA triển
            khai chương trình niềng răng trả góp TPHCM với thủ tục cực kỳ tối giản, giúp bạn bắt đầu
            hành trình thay đổi nụ cười ngay hôm nay.
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            <article className="border border-[#E1EDC9] rounded-2xl p-6">
              <h3 className="font-bold text-[#3F5219] mb-2">Trả trước linh hoạt</h3>
              <p className="text-sm text-[#5C6E6B]">Chỉ từ 30% - 40% chi phí trọn gói (tương đương từ 5 - 8 triệu đồng).</p>
            </article>
            <article className="border border-[#E1EDC9] rounded-2xl p-6">
              <h3 className="font-bold text-[#3F5219] mb-2">0% lãi suất</h3>
              <p className="text-sm text-[#5C6E6B]">Phần còn lại chia nhỏ chỉ từ 1.000.000 - 1.500.000 đ/tháng, trong 12 - 24 tháng.</p>
            </article>
            <article className="border border-[#E1EDC9] rounded-2xl p-6">
              <h3 className="font-bold text-[#3F5219] mb-2">Thủ tục 15 phút</h3>
              <p className="text-sm text-[#5C6E6B]">Không cần chứng minh thu nhập phức tạp, chỉ cần CCCD hoặc thẻ sinh viên.</p>
            </article>
            <article className="border border-[#E1EDC9] rounded-2xl p-6">
              <h3 className="font-bold text-[#3F5219] mb-2">Đặc quyền đi kèm</h3>
              <p className="text-sm text-[#5C6E6B]">Miễn phí hàm duy trì sau tháo niềng, hỗ trợ cạo vôi răng định kỳ miễn phí trong suốt quá trình chỉnh nha.</p>
            </article>
          </div>
        </section>

        {/* FAQ - dùng <details>/<summary> chuẩn semantic, không cần JS */}
        <section aria-labelledby="faq" className="bg-[#F6F9EF] py-20">
          <div className="max-w-3xl mx-auto px-4">
            <h2 id="faq" className="text-2xl md:text-3xl font-extrabold text-[#3F5219] mb-8">
              Câu Hỏi Thường Gặp (FAQ) Khi Khám Răng Tại Quận 10
            </h2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details key={f.question} className="bg-white rounded-xl p-5 group">
                  <summary className="font-semibold text-[#3F5219] cursor-pointer list-none flex justify-between items-center gap-4">
                    <span>{f.question}</span>
                    <span className="text-[#89b135] group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                  </summary>
                  <p className="text-sm text-[#5C6E6B] mt-3 leading-relaxed">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Liên hệ */}
        <section aria-labelledby="lien-he-heading" id="lien-he" className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 id="lien-he-heading" className="text-2xl md:text-3xl font-extrabold text-[#3F5219] mb-6">
              Liên Hệ Nha Khoa AVA – Điểm Đến An Tâm Ngay Tại Quận 10
            </h2>
            <div className="space-y-3 text-sm text-[#3A4F4C] mb-8">
              <p>Địa chỉ: 283/91 Cách Mạng Tháng 8, Phường Hòa Hưng, Quận 10, TP.HCM</p>
              <p>Hotline đặt lịch: 028 2206 6666 · 028 2229 7297 · 028 6686 2222</p>
              <p>Zalo hỗ trợ nhanh: 0388 888 272</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="tel:02822066666" className="bg-[#FF6B4A] hover:bg-[#E85535] text-white font-semibold px-6 py-3 rounded-full transition">
                Gọi ngay
              </a>
              <a href="https://zalo.me/0388888272" target="_blank" rel="noopener noreferrer" className="bg-[#0068FF] hover:bg-[#0055D4] text-white font-semibold px-6 py-3 rounded-full transition">
                Nhắn Zalo
              </a>
              <a href="https://g.page/nhakhoava" target="_blank" rel="noopener noreferrer" className="bg-white border-2 border-[#89b135] text-[#5C7A24] font-semibold px-6 py-3 rounded-full hover:bg-[#F1F7E4] transition">
                Xem trên Google Maps
              </a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-[#E1EDC9] h-80 md:h-full">
            <iframe
              title="Bản đồ Nha khoa AVA Quận 10"
              className="w-full h-full border-0"
              loading="lazy"
              src="https://www.google.com/maps?q=283%2F91+C%C3%A1ch+M%E1%BA%A1ng+Th%C3%A1ng+8%2C+Ph%C6%B0%E1%BB%9Dng+H%C3%B2a+H%C6%B0ng%2C+Qu%E1%BA%ADn+10%2C+TP.HCM&output=embed"
            />
          </div>
        </section>

        {/* CTA cuối trang */}
        <section aria-label="Đặt lịch khám" className="bg-[#3F5219] py-14">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
              Tư vấn & chụp phim miễn phí — đặt lịch ngay hôm nay
            </h2>
            <p className="text-[#D3E8B0] mb-7">Chỉ 1 cuộc gọi để biết chính xác tình trạng răng miệng của bạn.</p>
            <a href="tel:02822066666" className="inline-block bg-[#FF6B4A] hover:bg-[#E85535] text-white font-semibold px-8 py-4 rounded-full transition">
              Gọi 028 2206 6666
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
      <ContactWidgets />
    </>
  )
}
