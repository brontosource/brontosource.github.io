import FeatCard from "@/components/FeatCard";
import { useArticles } from "@/hooks/useArticle";
import SectionContainer from "@/ui/SectionContainer";
import SubtitleText from "@/ui/SubtitleText";
import TitleText from "@/ui/TitleText";

const ArticlesPage = async () => {
  const { articles } = await useArticles();
  return (
    <main className="flex flex-col items-center snap-y scroll-smooth gap-y-16 lg:gap-y-32 bg-base-100">
      <SectionContainer
        sectionName={"articles"}
        innerContainerClasses="flex flex-col gap-10 my-10"
      >
        <div>
          <TitleText>Articles</TitleText>
          <SubtitleText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            iusto autem dolores quam quod, reprehenderit saepe ipsam amet facere
            non ipsa voluptas rerum beatae ipsum dignissimos voluptatum fugiat
            voluptates recusandae!
          </SubtitleText>
        </div>
        <div className="flex md:grid md:grid-flow-col gap-4 flex-wrap">
          {articles.map((article: any) => (
            <FeatCard
              key={article.sys.id}
              image={{
                data: `https:${article.fields.seoPreviewImage.fields.file.url}`,
                width:
                  article.fields.seoPreviewImage.fields.file.details.image
                    .width,
                height:
                  article.fields.seoPreviewImage.fields.file.details.image
                    .height,
                alt: article.fields.seoPreviewImage.fields.description,
              }}
              title={article.fields.title}
              content={article.fields.seoDescription}
              redirectURL={`/articles/${article.fields.slug}`}
              showButton
            />
          ))}
        </div>
      </SectionContainer>
    </main>
  );
};

export default ArticlesPage;
