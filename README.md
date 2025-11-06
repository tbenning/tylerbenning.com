# Tyler Benning's Portfolio Site

A Next.js portfolio site using markdown-based content management with MDX.

## Getting Started

1. Clone the repository
2. Install dependencies: `yarn install`
3. Run the development server: `yarn dev`
4. Open [http://localhost:3000](http://localhost:3000)

## Content Management

Content is stored as markdown files in:
- `content/posts/` - Blog posts
- `content/projects/` - Project case studies

### Creating a New Post

1. Create a new file in `content/posts/[slug].mdx`
2. Add frontmatter:

```yaml
---
title: "My Post Title"
subtitle: "My post subtitle"
slug: "my-post-slug"
publishDate: "2024-01-01T00:00:00.000Z"
isPublished: true
---
```

3. Write your content in MDX format below the frontmatter

### Creating a New Project

1. Create a new file in `content/projects/[slug].mdx`
2. Add frontmatter:

```yaml
---
title: "My Project"
subtitle: "Project description"
slug: "my-project"
projectType: "work"
timeline: "2024"
company: "Company Name"
isPublished: true
bgColor: "#ffffff"
hasDarkBg: false
featuredImage: "/img/uploaded/image.jpg"
---
```

3. Write your content in MDX format below the frontmatter

## MDX Components

### Quote Component

```mdx
<Quote>
This is a quote that will be styled accordingly.
</Quote>
```

### Image Component

```mdx
<Image 
  src="/img/uploaded/image.jpg" 
  alt="Image description" 
  width={768} 
  height={384}
  caption="Optional caption"
/>
```

## Tech Stack

- **Next.js 14** - React framework with Pages Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **MDX** - Markdown with JSX support
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations

## Build

```bash
yarn build
yarn start
```
