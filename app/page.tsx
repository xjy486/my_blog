import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">欢迎来到我的博客</h1>
        <p className="text-gray-600 text-lg">
          这里分享技术文章、生活感悟和学习笔记
        </p>
      </div>

      <div className="space-y-8">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">还没有文章，快去写第一篇吧！</p>
            <p className="text-sm text-gray-400">
              在 posts/ 目录下创建 .md 文件即可开始写作
            </p>
          </div>
        ) : (
          posts.map((post) => (
            <article key={post.slug} className="border-b border-gray-200 pb-8 last:border-b-0">
              <h2 className="text-2xl font-semibold mb-3">
                <Link
                  href={`/posts/${post.slug}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <div className="text-gray-500 text-sm mb-3">
                {new Date(post.date).toLocaleDateString('zh-CN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              {post.excerpt && (
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
              )}
              <Link
                href={`/posts/${post.slug}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                阅读全文 →
              </Link>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
