# Migration Guide: Keystone to Markdown

This document explains the migration from Keystone CMS to markdown-based content management.

## Migration Status

✅ Code migration complete
⚠️ **IMPORTANT**: Content migration must be run before removing Keystone dependencies

## Steps to Complete Migration

### 1. Run Content Migration Script

The migration script reads directly from the SQLite database, so you don't need Keystone installed:

```bash
# Make sure dependencies are installed
yarn install

# Run the migration script
yarn migrate
```

This will:
- Read all posts and projects from the Keystone database
- Convert Keystone document format to MDX
- Generate markdown files in `content/posts/` and `content/projects/`

### 2. Review Generated Content

After running the migration script:
1. Check the generated markdown files in `content/posts/` and `content/projects/`
2. Review the frontmatter (metadata) for each file
3. Manually adjust any content that didn't convert correctly
4. Verify that images are correctly referenced

### 3. Install New Dependencies

```bash
yarn install
```

This will install:
- Next.js 14.2.0
- React 18.3.0
- MDX processing libraries (next-mdx-remote, gray-matter, etc.)
- Updated TypeScript and related dependencies

### 4. Remove Keystone Files (After Migration)

Once you've verified the content migration:

```bash
# Remove Keystone configuration
rm keystone.ts

# Remove generated schema files
rm schema.graphql schema.prisma

# Remove database (backup first if needed!)
rm app.db

# Remove Keystone generated API directory
rm -rf .keystone

# Remove old component-blocks (already done)
rm -rf lib/component-blocks
```

### 5. Test the Application

```bash
# Start development server
yarn dev

# Build for production
yarn build
```

## What Changed

### Content Structure

- **Before**: Content stored in SQLite database via Keystone
- **After**: Content stored as markdown files in `content/posts/` and `content/projects/`

### Component Blocks

- **Before**: Keystone component blocks (quote, image) defined in `lib/component-blocks/index.tsx`
- **After**: MDX components in `components/mdx/` (Quote.tsx, Image.tsx)

### Content Rendering

- **Before**: Keystone `DocumentRenderer` component
- **After**: `next-mdx-remote` with custom MDX components

### Pages Updated

- `pages/index.tsx` - Now reads from markdown files
- `pages/post/[slug].tsx` - Now renders MDX content
- `pages/project/[slug].tsx` - Now renders MDX content

## Creating New Content

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
4. Use MDX components like `<Quote>` and `<Image>` as needed

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

## Troubleshooting

### Build Errors

If you encounter build errors:
1. Make sure all dependencies are installed: `yarn install`
2. Check that markdown files have valid frontmatter
3. Verify image paths are correct
4. Check TypeScript errors: `yarn build`

### Missing Content

If content is missing:
1. Verify markdown files exist in `content/posts/` and `content/projects/`
2. Check that `isPublished` is set to `true` in frontmatter
3. Ensure slugs match file names (without .mdx extension)

### Image Loading Issues

1. Verify images are in `public/img/uploaded/`
2. Check that image paths in markdown start with `/img/uploaded/`
3. Ensure images are committed to git (if using version control)

