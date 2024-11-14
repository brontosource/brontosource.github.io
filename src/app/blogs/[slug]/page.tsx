import AboutDev from "@/components/AboutDev";
import BlogList from "@/constants/blogList";
import SubtitleText from "@/ui/SubtitleText";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 0;
export const dynamicParams = true;

const BlogPost = ({ params }: { params: { slug: string } }) => {
  const blogPost = BlogList.find((post) => post.slug === params.slug);
  if (!blogPost) {
    notFound();
  }
  return (
    <main className="container h-[calc(100vh-324px)] min-h-fit flex flex-col flex-grow justify-center mx-auto text-center py-12">
      <Markdown>{blogPost.content}</Markdown>
      <div className="text-center mb-8 flex flex-col gap-8">
        <AboutDev
          image={blogPost.author.image}
          title={blogPost.author.title}
          name={blogPost.author.name}
        >
          Matt spent the past eleven years at Google where he led the Software
          Ecosystems organization as a Principal Engineer. During that time he
          designed language and library features for migration, as well as
          directly planning and executing multiple migrations of previously
          unapproachable difficulty. Rust’s{" "}
          <a href="https://doc.rust-lang.org/std/collections/struct.HashMap.html">
            <code>std::collections::HashMap</code>
          </a>{" "}
          is based directly on{" "}
          <a href="https://www.youtube.com/watch?v=ncHmEUmJZf4">his work</a>.
        </AboutDev>
        <div>
          <SubtitleText>
            If you want to learn more about BrontoSource, check our home page
            for addtional info and exmaples
          </SubtitleText>
          <Link href="/" className="btn btn-primary w-40 my-4 mx-auto">
            Back To Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default BlogPost;
