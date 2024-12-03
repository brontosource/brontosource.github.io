import SectionContainer from "@/ui/SectionContainer";
import TitleText from "@/ui/TitleText";
import SubtitleText from "@/ui/SubtitleText";
import FeatCard from "@/components/FeatCard";
import { useAllArticles } from "@/hooks/useArticle";
import Link from "next/link";

const KeyFeatures = async () => {
  // Uncomment the line below to fetch all articles instead of only live articles
  // const { articles } = await useAllArticles();
  const { articles } = await useAllArticles();

  // If there are less than 2 articles, don't render the section
  if (!articles || articles.length <= 1) return null;

  // Get the first 2 articles to feature
  const FeatArticles = articles.splice(0, 2);

  return (
    <SectionContainer
      sectionName="key-features"
      innerContainerClasses="flex flex-col gap-y-10"
    >
      <div>
        <TitleText sectionClasses="text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </TitleText>
        <SubtitleText sectionClasses="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          iusto autem dolores quam quod, reprehenderit saepe ipsam amet facere
          non ipsa voluptas rerum beatae ipsum dignissimos voluptatum fugiat
          voluptates recusandae!
        </SubtitleText>
      </div>
      <div className="flex md:grid md:grid-flow-col gap-4 flex-wrap">
        {FeatArticles.map((article: any) => (
          <FeatCard
            key={article.sys.id}
            image={{
              data: `https:${article.fields.seoPreviewImage.fields.file.url}`,
              width:
                article.fields.seoPreviewImage.fields.file.details.image.width,
              height:
                article.fields.seoPreviewImage.fields.file.details.image.height,
              alt: article.fields.seoPreviewImage.fields.description,
            }}
            title={article.fields.title}
            content={article.fields.seoDescription}
            redirectURL={`/articles/${article.fields.slug}`}
            showButton
          />
        ))}
      </div>
      <Link href="/articles" className="btn btn-primary max-w-28 mx-auto">
        All Articles
      </Link>
    </SectionContainer>
  );
};

export default KeyFeatures;
