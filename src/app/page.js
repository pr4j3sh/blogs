import BlogCard from "@/components/blog-card";
import { getBlogs } from "@/lib/utils";

export default async function Home() {
  const blogs = await getBlogs();
  return (
    <main>
      <article>
        <blockquote>
          <b>Sharing my learning with the world.</b>{" "}
          <small>
            — <i>4j3</i>
          </small>
        </blockquote>
      </article>
      <section>
        <b>Recent blogs</b>
        <section>
          {blogs.length > 0 ? (
            blogs.map((b) => {
              return <BlogCard key={b?.slug} blog={b} />;
            })
          ) : (
            <p>No blogs to show.</p>
          )}
        </section>
      </section>
    </main>
  );
}
