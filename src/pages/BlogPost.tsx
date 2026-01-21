import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { blogs } from "@/data/blogs";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  const relatedBlogs = blogs.filter((b) => b.id !== id).slice(0, 2);

  return (
    <Layout>
      {/* Header */}
      <section className="bg-muted section-padding">
        <div className="container-custom">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary font-sans text-sm font-medium mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <div className="max-w-3xl">
            <span className="text-primary font-sans text-sm font-medium tracking-wider uppercase">
              {blog.category}
            </span>
            <h1 className="heading-display text-foreground mt-3 mb-6">
              {blog.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground font-sans text-sm">
              <span className="flex items-center gap-2">
                <User size={16} />
                {blog.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {blog.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} />
                {blog.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-2">
              {/* Featured Image */}
              <div className="aspect-video rounded-lg overflow-hidden bg-muted mb-10">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Article Content */}
              <div
                className="prose prose-lg max-w-none 
                  prose-headings:font-serif prose-headings:text-foreground 
                  prose-p:text-muted-foreground prose-p:font-sans prose-p:leading-relaxed
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                {/* Related Posts */}
                <div className="card-premium p-6">
                  <h3 className="font-serif text-xl font-medium text-foreground mb-6">
                    Related Articles
                  </h3>
                  <div className="space-y-6">
                    {relatedBlogs.map((related) => (
                      <Link
                        key={related.id}
                        to={`/blog/${related.id}`}
                        className="block group"
                      >
                        <span className="text-primary text-xs font-sans font-medium uppercase">
                          {related.category}
                        </span>
                        <h4 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors mt-1 line-clamp-2">
                          {related.title}
                        </h4>
                        <span className="text-muted-foreground text-sm font-sans mt-2 flex items-center gap-1">
                          <Clock size={12} />
                          {related.readTime}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-primary rounded-lg p-6 text-center">
                  <h3 className="font-serif text-xl font-medium text-primary-foreground mb-3">
                    Need Our Products?
                  </h3>
                  <p className="text-primary-foreground/80 text-sm font-sans mb-4">
                    Contact us for premium coir and agro products.
                  </p>
                  <Link
                    to="/contact"
                    className="bg-background text-foreground px-4 py-2 rounded-md font-sans text-sm font-medium inline-block hover:bg-background/90 transition-colors"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
