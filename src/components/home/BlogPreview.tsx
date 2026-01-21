import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { blogs } from "@/data/blogs";
import BlogCard from "@/components/blog/BlogCard";

const BlogPreview = () => {
  const featuredBlogs = blogs.slice(0, 3);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-sans text-sm font-medium tracking-wider uppercase">
            Latest Insights
          </span>
          <h2 className="heading-section text-foreground mt-3 mb-4">
            From Our Blog
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Stay updated with industry trends, product insights, and the latest 
            news from Cross Exports.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredBlogs.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/blog"
            className="btn-outline inline-flex items-center gap-2"
          >
            View All Articles
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
