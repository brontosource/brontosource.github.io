import LargeScaleChanges from "./Blogs/LargeScaleChanges";
import WhyMigrateToRust from "./Blogs/WhyMigrateToRust";
import { authorType } from "./authors";

export type BlogType = {
  title: string;
  slug: string;
  author: authorType;
  content: string;
};

const BlogList: BlogType[] = [WhyMigrateToRust, LargeScaleChanges];

export default BlogList;
