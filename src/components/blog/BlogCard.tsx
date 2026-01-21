import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { Blog } from "@/data/blogs";

interface BlogCardProps {
  blog: Blog;
  index?: number;
}

const BlogCard = ({ blog, index = 0 }: BlogCardProps) => {
  return (
    <Link
      to={`/blog/${blog.id}`}
      className="card-premium overflow-hidden group animate-slide-up block"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image */}
      <div className="aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground font-sans mb-3">
          <span className="text-primary font-medium">{blog.category}</span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {blog.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="heading-card text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className="text-muted-foreground text-sm font-sans line-clamp-2 mb-4">
          {blog.excerpt}
        </p>

        {/* Read More */}
        <span className="inline-flex items-center gap-2 text-primary text-sm font-sans font-medium group-hover:gap-3 transition-all">
          Read Article
          <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
};

export default BlogCard;
