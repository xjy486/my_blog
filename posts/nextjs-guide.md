---
title: "Next.js 博客开发指南"
date: "2024-01-10"
excerpt: "详细介绍如何使用 Next.js 构建一个功能完整的博客系统。"
---

# Next.js 博客开发指南

在这篇文章中，我将分享如何使用 Next.js 构建一个现代化的博客系统。

## 为什么选择 Next.js？

Next.js 是一个功能强大的 React 框架，它提供了：

### 1. 静态站点生成 (SSG)
```javascript
export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
```

### 2. 服务端渲染 (SSR)
对于需要动态内容的页面，Next.js 提供了优秀的 SSR 支持。

### 3. 自动代码分割
Next.js 会自动为每个页面创建单独的 JavaScript 包，提高加载性能。

## 项目结构

```
blog-website/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── posts/
│       └── [slug]/
│           └── page.tsx
├── lib/
│   └── posts.ts
├── posts/
│   ├── welcome.md
│   └── nextjs-guide.md
└── types/
    └── post.ts
```

## Markdown 处理

我们使用 `gray-matter` 来解析 Markdown 文件的前置数据：

```typescript
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || '',
    date: data.date || '',
    content: contentHtml,
    excerpt: data.excerpt || '',
  };
}
```

## 样式设计

使用 Tailwind CSS 可以快速构建美观的界面：

```jsx
<article className="max-w-4xl mx-auto">
  <header className="mb-8">
    <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
    <div className="text-gray-500 mb-6">
      {new Date(post.date).toLocaleDateString('zh-CN')}
    </div>
  </header>
  
  <div 
    className="prose prose-lg max-w-none"
    dangerouslySetInnerHTML={{ __html: post.content }}
  />
</article>
```

## 部署到 GitHub Pages

配置 `next.config.ts` 以支持静态导出：

```typescript
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};
```

## 总结

通过这个指南，你应该能够：

1. ✅ 理解 Next.js 博客的基本架构
2. ✅ 掌握 Markdown 文件处理
3. ✅ 学会配置静态站点生成
4. ✅ 了解部署到 GitHub Pages 的方法

下一篇文章我将介绍如何添加更多高级功能，如标签分类和搜索功能。