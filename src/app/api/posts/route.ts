// src/app/api/posts/route.ts
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}

function removeVietnameseTones(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
}

function generateSlug(title: string): string {
  const noTones = removeVietnameseTones(title)
  const base = noTones
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')

  const randomSuffix = Math.floor(1000 + Math.random() * 9000)
  return `${base}-${randomSuffix}`
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, summary, content, isFeatured, password } = body

    const adminPassword = process.env.ADMIN_PASSWORD || 'nhakhoaava2026'
    if (password !== adminPassword) {
      return NextResponse.json({ success: false, error: 'Sai mật khẩu quản trị' }, { status: 401 })
    }

    if (!title || typeof title !== 'string' || !title.trim()) {
      return NextResponse.json({ success: false, error: 'Thiếu tiêu đề bài viết' }, { status: 400 })
    }

    const slug = generateSlug(title)

    const { data, error } = await supabase
      .from('posts')
      .insert([
        {
          title,
          slug,
          summary: summary ?? '',
          content: content ?? '',
          is_featured: Boolean(isFeatured),
        },
      ])
      .select()

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}