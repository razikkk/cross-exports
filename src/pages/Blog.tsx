import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";
import BlogCard from "@/components/blog/BlogCard";
import { blogs } from "@/data/blogs";

const Blog = () => {
  return (
    <Layout>
      <PageHeader
        label="Our Blog"
        title="Insights & Updates"
        subtitle="Stay informed with the latest industry trends, product insights, and news from Cross Exports."
      />

      {/* Blog Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <BlogCard key={blog.id} blog={blog} index={index} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
