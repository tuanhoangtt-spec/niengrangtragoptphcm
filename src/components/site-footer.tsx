// components/site-footer.tsx
// Footer dùng chung, có đầy đủ thông tin pháp lý theo quy định (giấy phép, mã số thuế, bác sĩ phụ trách).

export default function SiteFooter() {
  return (
    <footer className="py-10 text-center text-sm text-[#5C6E6B] border-t border-[#E1EDC9] mt-10">
      <p className="font-bold text-[#3F5219] mb-1">CÔNG TY TNHH NHA KHOA THẨM MỸ AVA</p>
      <p>283/91 Cách Mạng Tháng 8, Phường Hòa Hưng, Quận 10, TP.HCM</p>
      <p>Giấy phép hoạt động số 04405/SYT-GPHĐ · Mã số thuế: 0312093828</p>
      <p>BS. Phạm Việt Hùng — CCHN số 008280/HCM-CCHN</p>
      <p>BS. Nguyễn Bảo Ngọc — CCHN số 007048/HCM-CCHN</p>
      <p className="mt-2">
        Hotline: 028 2206 6666 · 028 2229 7297 · 028 6686 2222 · Zalo: 0388 888 272
      </p>
      <p className="mt-2">© 2026 Nha khoa AVA. Tất cả các quyền được bảo lưu.</p>
    </footer>
  )
}
