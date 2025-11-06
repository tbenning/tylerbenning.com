/**
 * Migration script to export Keystone content to markdown files
 * 
 * This script reads directly from the SQLite database and converts content to markdown files.
 * 
 * Usage:
 *   1. Make sure app.db exists
 *   2. Run: yarn migrate
 *   3. Review the generated markdown files in content/posts/ and content/projects/
 */

import fs from "fs"
import path from "path"
import Database from "better-sqlite3"

// Helper function to convert Keystone document format to MDX
function convertDocumentToMDX(document: any, db: Database.Database): string {
  if (!document || !Array.isArray(document)) {
    return ""
  }

  let mdx = ""

  for (const node of document) {
    if (node.type === "paragraph") {
      const text = extractText(node)
      if (text) {
        mdx += text + "\n\n"
      }
    } else if (node.type === "heading") {
      const level = node.level || 1
      const text = extractText(node)
      if (text) {
        mdx += "#".repeat(level) + " " + text + "\n\n"
      }
    } else if (node.type === "blockquote") {
      const text = extractText(node)
      if (text) {
        mdx += "> " + text.replace(/\n/g, "\n> ") + "\n\n"
      }
    } else if (node.type === "code") {
      const lang = node.lang || ""
      const text = extractText(node)
      if (text) {
        mdx += "```" + lang + "\n" + text + "\n```\n\n"
      }
    } else if (node.type === "divider") {
      mdx += "---\n\n"
    } else if (node.type === "ordered-list" || node.type === "unordered-list") {
      const items = node.children || []
      for (let i = 0; i < items.length; i++) {
        const item = items[i]
        const text = extractText(item)
        if (text) {
          const prefix = node.type === "ordered-list" ? `${i + 1}. ` : "- "
          mdx += prefix + text + "\n"
        }
      }
      mdx += "\n"
    } else if (node.type === "component-block") {
      if (node.component === "quote") {
        const text = extractText(node.props?.content)
        if (text) {
          mdx += "<Quote>\n" + text + "\n</Quote>\n\n"
        }
      } else if (node.component === "image") {
        // Image component blocks have an ID reference in node.props.image.id
        const imageId = node.props?.image?.id || node.props?.image?.value?.id || ""
        const width = node.props?.width?.value || node.props?.width || "768"
        const height = node.props?.height?.value || node.props?.height || "384"
        const caption = node.props?.caption?.value || node.props?.caption || ""
        
        if (imageId && db) {
          // Look up the image in the database
          const image = db.prepare("SELECT * FROM Image WHERE id = ?").get(imageId) as any
          if (image) {
            // Build the image URL from image_id and extension
            const imageFile = image.image_id || ""
            const extension = image.image_extension || ""
            const altText = image.alt || ""
            
            if (imageFile) {
              const src = `/img/uploaded/${imageFile}${extension ? `.${extension}` : ""}`
              mdx += `<Image src="${src}" alt="${altText}" width="${width}" height="${height}" caption="${caption}" />\n\n`
            }
          }
        }
      }
    } else if (node.type === "layout") {
      // Handle layout blocks - convert to simple paragraphs for now
      const children = node.children || []
      for (const child of children) {
        mdx += convertDocumentToMDX([child], db)
      }
    }
  }

  return mdx.trim()
}

function extractText(node: any): string {
  if (!node) return ""
  
  if (typeof node === "string") {
    return node
  }
  
  if (node.text) {
    let text = node.text
    if (node.bold) text = `**${text}**`
    if (node.italic) text = `*${text}*`
    if (node.underline) text = `<u>${text}</u>`
    if (node.code) text = "`" + text + "`"
    if (node.link?.href) {
      text = `[${text}](${node.link.href})`
    }
    return text
  }
  
  if (node.children && Array.isArray(node.children)) {
    return node.children.map((child: any) => extractText(child)).join("")
  }
  
  return ""
}

function migratePosts(db: Database.Database) {
  console.log("Migrating posts...")
  
  try {
    const posts = db.prepare("SELECT * FROM Post").all() as any[]

    const postsDir = path.join(process.cwd(), "content/posts")
    if (!fs.existsSync(postsDir)) {
      fs.mkdirSync(postsDir, { recursive: true })
    }

    let migratedCount = 0

    for (const post of posts) {
      if (!post.slug) {
        console.warn(`Skipping post "${post.title}" - no slug`)
        continue
      }

      const frontmatter = {
        title: post.title || "",
        subtitle: post.subtitle || "",
        slug: post.slug,
        publishDate: post.publishDate ? new Date(post.publishDate).toISOString() : new Date().toISOString(),
        isPublished: post.isPublished ?? true,
      }

      let content = ""
      if (post.content) {
        try {
          const document = JSON.parse(post.content)
          content = convertDocumentToMDX(document, db)
        } catch (e) {
          console.warn(`Failed to parse content for post "${post.slug}":`, e)
        }
      }

      const markdown = `---\n${Object.entries(frontmatter)
        .map(([key, value]) => `${key}: ${typeof value === "string" ? `"${value.replace(/"/g, '\\"')}"` : value}`)
        .join("\n")}\n---\n\n${content}`

      const filePath = path.join(postsDir, `${post.slug}.mdx`)
      fs.writeFileSync(filePath, markdown, "utf-8")
      console.log(`✓ Migrated post: ${post.slug}`)
      migratedCount++
    }

    console.log(`\nMigrated ${migratedCount} posts`)
  } catch (error) {
    console.error("Error migrating posts:", error)
    throw error
  }
}

function migrateProjects(db: Database.Database) {
  console.log("\nMigrating projects...")
  
  try {
    const projects = db.prepare("SELECT * FROM Project").all() as any[]

    const projectsDir = path.join(process.cwd(), "content/projects")
    if (!fs.existsSync(projectsDir)) {
      fs.mkdirSync(projectsDir, { recursive: true })
    }

    let migratedCount = 0

    for (const project of projects) {
      if (!project.slug) {
        console.warn(`Skipping project "${project.title}" - no slug`)
        continue
      }

      // Get featured image if it exists
      let featuredImageUrl: string | undefined
      if (project.featuredImage) {
        const image = db.prepare("SELECT * FROM Image WHERE id = ?").get(project.featuredImage) as any
        if (image?.image_id) {
          // Image path is typically stored in the image_id field
          featuredImageUrl = `/img/uploaded/${image.image_id}${image.image_extension ? `.${image.image_extension}` : ""}`
        }
      }

      const frontmatter: any = {
        title: project.title || "",
        subtitle: project.subtitle || "",
        slug: project.slug,
        projectType: project.projectType || "work",
        isPublished: project.isPublished ?? true,
        hasDarkBg: project.hasDarkBg ?? true,
      }

      if (project.timeline) frontmatter.timeline = project.timeline
      if (project.company) frontmatter.company = project.company
      if (project.bgColor) frontmatter.bgColor = project.bgColor
      if (featuredImageUrl) frontmatter.featuredImage = featuredImageUrl

      let content = ""
      if (project.content) {
        try {
          const document = JSON.parse(project.content)
          content = convertDocumentToMDX(document, db)
        } catch (e) {
          console.warn(`Failed to parse content for project "${project.slug}":`, e)
        }
      }

      const markdown = `---\n${Object.entries(frontmatter)
        .map(([key, value]) => {
          if (typeof value === "string") {
            return `${key}: "${value.replace(/"/g, '\\"')}"`
          }
          return `${key}: ${value}`
        })
        .join("\n")}\n---\n\n${content}`

      const filePath = path.join(projectsDir, `${project.slug}.mdx`)
      fs.writeFileSync(filePath, markdown, "utf-8")
      console.log(`✓ Migrated project: ${project.slug}`)
      migratedCount++
    }

    console.log(`\nMigrated ${migratedCount} projects`)
  } catch (error) {
    console.error("Error migrating projects:", error)
    throw error
  }
}

function main() {
  console.log("Starting content migration from Keystone to Markdown...\n")

  const dbPath = path.join(process.cwd(), "app.db")
  
  if (!fs.existsSync(dbPath)) {
    console.error(`❌ Database file not found: ${dbPath}`)
    console.error("Make sure app.db exists in the project root")
    process.exit(1)
  }

  const db = new Database(dbPath, { readonly: true })

  try {
    migratePosts(db)
    migrateProjects(db)
    console.log("\n✅ Migration complete!")
    console.log("\nNext steps:")
    console.log("1. Review the generated markdown files in content/posts/ and content/projects/")
    console.log("2. Manually adjust any content that didn't convert correctly")
    console.log("3. Remove Keystone dependencies and run the build")
  } catch (error) {
    console.error("\n❌ Migration failed:", error)
    process.exit(1)
  } finally {
    db.close()
  }
}

main()
