import { getAllBlogMeta } from "@/utils/blogData";
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";

export default async function BlogPage() {
  const blogs = await getAllBlogMeta();

  return (
    <div className="h-full flex flex-col p-8 lg:px-32 lg:py-16 text-slate-300 space-y-16">
      <div className="flex-1 space-y-16">
        <BlogList blogs={blogs} />
      </div>
      <Footer />
    </div>
  );
}
