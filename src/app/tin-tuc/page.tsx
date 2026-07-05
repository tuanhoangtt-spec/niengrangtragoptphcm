// src/app/tin-tuc/[slug]/page.tsx
import { supabase } from "@/lib/supabase"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import ContactWidgets from "@/components/contact-widgets"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export const revalidate = 0

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  const day = String(d.getDate()).padStart(2, "0")
  const month = String(d.getMonth() + 1).padStart(2, "0")
  return `${day}/${month}/${d.getFullYear()}`
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const { data: post } = await supabase
    .from("posts")
    .select("title, summary")
    .eq("slug", params.slug)
    .single()

  if (!post) {
    return {
      title: "Không tìm thấy bài viết - Nha khoa AVA",
    }
  }

  return {
    title: `${post.title} - Nha khoa AVA`,
    description: post.summary || post.title,
  }
}

export default async function TinTucDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const { data: post, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", params.slug)
    .single()

  if (error || !post) {
    notFound()
  }

  return (
    <>
      <SiteHeader />

      <main className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-xs text-[#8A9A87] mb-3">{formatDate(post.created_at)}</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#3F5219] mb-5">
          {post.title}
        </h1>

        {post.summary && (
          <div className="bg-[#F6F9EF] border-l-4 border-[#89b135] rounded-r-xl px-5 py-4 mb-8 text-[#3A4F4C] font-medium">
            {post.summary}
          </div>
        )}

        <div
          className="prose prose-blue max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </main>

      <SiteFooter />
      <ContactWidgets />
    </>
  )
}