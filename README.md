# 我的博客

这是一个使用 Next.js 构建的个人博客网站，支持 Markdown 文章和图片。

## 功能特点

- ✅ **Markdown 支持** - 使用标准 Markdown 语法写作
- ✅ **图片支持** - 可以在文章中插入图片
- ✅ **响应式设计** - 适配各种屏幕尺寸
- ✅ **静态生成** - 快速加载，SEO 友好
- ✅ **GitHub Pages 部署** - 自动化部署流程

## 技术栈

- [Next.js 15](https://nextjs.org/) - React 框架
- [TypeScript](https://www.typescriptlang.org/) - 类型安全
- [Tailwind CSS](https://tailwindcss.com/) - 样式框架
- [gray-matter](https://github.com/jonschlinkert/gray-matter) - Markdown 前置数据解析
- [remark](https://remark.js.org/) - Markdown 处理

## 快速开始

### 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

### 写作指南

1. 在 `posts/` 目录下创建 `.md` 文件
2. 添加 frontmatter 元数据：

```markdown
---
title: "文章标题"
date: "2024-01-15"
excerpt: "文章摘要"
coverImage: "/images/cover.jpg" # 可选
---

# 文章内容

这里是你的 Markdown 内容...
```

3. 保存文件，博客会自动生成新页面

### 部署到 GitHub Pages

1. 将代码推送到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择 GitHub Actions 作为部署源
4. 每次推送到 main 分支时会自动部署

## 项目结构

```
blog-website/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 全局布局
│   ├── page.tsx           # 首页
│   └── posts/
│       └── [slug]/
│           └── page.tsx   # 文章页面
├── lib/
│   └── posts.ts           # 文章处理逻辑
├── posts/                 # Markdown 文章目录
│   ├── welcome.md
│   ├── nextjs-guide.md
│   └── markdown-guide.md
├── types/
│   └── post.ts            # TypeScript 类型定义
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions 部署配置
└── public/                # 静态资源
```

## 自定义配置

### 修改网站信息

编辑 `app/layout.tsx` 文件：

```typescript
export const metadata: Metadata = {
  title: "你的博客名称",
  description: "你的博客描述",
};
```

### 修改样式

所有样式都使用 Tailwind CSS，你可以直接修改组件中的 className。

### 添加新功能

- 标签分类：在 frontmatter 中添加 `tags` 字段
- 搜索功能：可以集成 Algolia 或其他搜索服务
- 评论系统：可以集成 Disqus 或 Giscus

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！

---

**开始写作吧！** 🚀
