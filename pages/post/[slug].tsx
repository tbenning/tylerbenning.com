import {
    GetStaticPathsResult,
    GetStaticPropsContext,
    InferGetStaticPropsType,
  } from 'next';
  import Link from 'next/link';
  import { DocumentRenderer, DocumentRendererProps } from '@keystone-next/document-renderer';
  import { query } from '.keystone/api';
  import Layout from '../../components/Layout'
  
  const renderers: DocumentRendererProps['renderers'] = {
    // use your editor's autocomplete to see what other renderers you can override
    inline: {
      bold: ({ children }) => {
        return <strong>{children}</strong>;
      },
    },

    block: {
      paragraph: ({ children, textAlign }) => {
        return <p style={{ textAlign }}>{children}</p>;
      },
    },
  };

  export default function PostPage({
    post,
  }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
      <Layout>
      <article className="prose prose-lg">
        <main style={{margin: "3rem"}}>
        <div>
          <Link href="/">
            <a>&larr; back home</a>
          </Link>
        </div>
        <h1>{post.title}</h1>

        {/* <p>{post.content}</p> */}
        {post.content?.document && (
        <DocumentRenderer document={post.content.document} renderers={renderers} />
      )}
        </main>
      </article>
      </Layout>
    );
  }
  
  export async function getStaticPaths(): Promise<GetStaticPathsResult> {
    const posts = await query.Post.findMany({
      query: `slug`,
    });
  
    const paths = posts
      .map(post => post.slug)
      .filter((slug): slug is string => !!slug)
      .map(slug => `/post/${slug}`);
  
    return {
      paths,
      fallback: false,
    };
  }
  
  export async function getStaticProps({
    params,
  }: GetStaticPropsContext) {
    const post = await query.Post.findOne({
      where: { slug: params!.slug as string },
      query: 'id title content {document}',
    });
    return { props: { post } };
  }