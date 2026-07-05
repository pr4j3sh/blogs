import { AUTHOR, SITE } from "@/lib/consts";
import { getBlogs } from "@/lib/utils";
import Link from "next/link";

export default async function Page({ params }) {
  const { slug } = await params;
  const { default: Blog } = await import(`@/blogs/${slug}.md`);

  return (
    <section>
      <Link href="/" className="btns">
        <button className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="currentColor" d="m9 18l-6-6l6-6l1.4 1.4L6.8 11H21v2H6.8l3.6 3.6z" />
          </svg>
        </button>
        <span>Back</span>
      </Link>
      <Blog />
    </section>
  );
}

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs;
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blogs = await getBlogs();
  const post = blogs.find((b) => b.slug === slug);

  return {
    title: `${post.title} | pr4j3sh/blogs`,
    description: `Read about ${post.title} — a blog post by ${AUTHOR.NAME}.`,
    authors: [{ name: AUTHOR.NAME, url: AUTHOR.URL }],
    openGraph: {
      title: post.title,
      description: `Read about ${post.title} by ${AUTHOR.NAME}.`,
      type: "article",
      publishedTime: post.date,
      siteName: SITE.TITLE,
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: `Read about ${post.title} by ${AUTHOR.NAME}.`,
    },
  };
}
