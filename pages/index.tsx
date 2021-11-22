import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import Capsule from '../components/Capsule'
import Layout from '../components/Layout'

// Import the generated Lists API from Keystone
import { query } from '.keystone/api';

// Home receives a `posts` prop from `getStaticProps` below
export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <main className="m-16 p-16">
      <h1 className="mt-6 text-5xl font-bold text-primary leading-headers">Hi, I'm Tyler — <span className="text-darkseafoam inline-block" >I'm the founding designer at Together</span></h1>
      {/* <h1 className="antialiased font-serif mt-6 text-6xl text-gray-900">Hi, I’m Tyler — <span className="text-darkseafoam inline-block" >I’m the founding designer at Together</span></h1> */}
      <p className="text-secondary mt-6">Having worked at a startup for the last few years, I developed a knack for these roles too</p>
      <div className="space-x-2 mt-3 flex flex-wrap">
        <Capsule text="Product Management"/>
        <Capsule text="Growth"/>
        <Capsule text="Marketing"/>
        <Capsule text="Front End Development"/>
        <Capsule text="User Research"/>
      </div>
      <ul>
        {/* Render each post with a link to the content page */}
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/post/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      </main>
    </Layout>
  )
}

// Here we use the Lists API to load all the posts we want to display
// The return of this function is provided to the `Home` component
export async function getStaticProps() {
  const posts = await query.Post.findMany({ query: 'id title slug' });
  return { props: { posts } };
}