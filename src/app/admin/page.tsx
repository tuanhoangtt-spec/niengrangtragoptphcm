// src/app/admin/page.tsx
"use client"

import { useState, FormEvent } from "react"

type Status =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "success" }
  | { type: "error"; message: string }

export default function AdminPage() {
  const [password, setPassword] = useState("")
  const [title, setTitle] = useState("")
  const [summary, setSummary] = useState("")
  const [content, setContent] = useState("")
  const [isFeatured, setIsFeatured] = useState(false)
  const [status, setStatus] = useState<Status>({ type: "idle" })

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus({ type: "loading" })

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, title, summary, content, isFeatured }),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        if (res.status === 401) {
          setStatus({ type: "error", message: "Sai mật khẩu quản trị." })
        } else {
          setStatus({ type: "error", message: data.error || "Có lỗi xảy ra, vui lòng thử lại." })
        }
        return
      }

      setStatus({ type: "success" })
      setTitle("")
      setSummary("")
      setContent("")
      setIsFeatured(false)
    } catch (err) {
      setStatus({
        type: "error",
        message: err instanceof Error ? err.message : "Không thể kết nối tới máy chủ.",
      })
    }
  }

  const isLoading = status.type === "loading"

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8 text-center">
          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl mx-auto mb-3">
            A
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Trang Quản Trị Đăng Bài</h1>
          <p className="text-sm text-slate-500 mt-1">Nha khoa AVA — Đăng bài viết mới</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-5"
        >
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-1.5">
              Mật khẩu quản trị <span className="text-red-500">*</span>
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Nhập mật khẩu quản trị"
            />
          </div>

          <div>
            <label htmlFor="title" className="block text-sm font-semibold text-slate-700 mb-1.5">
              Tiêu đề bài viết <span className="text-red-500">*</span>
            </label>
            <input
              id="title"
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ví dụ: 5 cách chăm sóc răng miệng sau khi niềng"
            />
          </div>

          <div>
            <label htmlFor="summary" className="block text-sm font-semibold text-slate-700 mb-1.5">
              Mô tả ngắn / Sapo
            </label>
            <textarea
              id="summary"
              rows={2}
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              placeholder="Tóm tắt ngắn gọn nội dung bài viết..."
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-semibold text-slate-700 mb-1.5">
              Nội dung chi tiết <span className="text-red-500">*</span>
            </label>
            <textarea
              id="content"
              rows={10}
              required
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y"
              placeholder="Nhập nội dung bài viết (có thể dùng HTML đơn giản: <p>, <b>, <h2>...)"
            />
          </div>

          <label className="flex items-center gap-2.5 text-sm font-medium text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={isFeatured}
              onChange={(e) => setIsFeatured(e.target.checked)}
              className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            ⭐ Đánh dấu là Tin nổi bật (hiển thị trên Widget và Trang chủ)
          </label>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold py-3 rounded-lg transition"
          >
            {isLoading ? "Đang xuất bản..." : "Đăng bài viết"}
          </button>

          {status.type === "success" && (
            <div className="bg-green-50 text-green-700 border border-green-200 rounded-lg px-4 py-3 text-sm font-medium">
              ✅ Đăng bài thành công!
            </div>
          )}
          {status.type === "error" && (
            <div className="bg-red-50 text-red-700 border border-red-200 rounded-lg px-4 py-3 text-sm font-medium">
              ❌ {status.message}
            </div>
          )}
        </form>
      </div>
    </main>
  )
}