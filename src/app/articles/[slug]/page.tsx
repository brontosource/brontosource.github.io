import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import Image from "next/image";
import parse from "html-react-parser";
import { Metadata, ResolvingMetadata } from "next";
import { landingPageFieldsType } from "@/types/contentfulTypes";
import SectionContainer from "@/ui/SectionContainer";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import TitleText from "@/ui/TitleText";
import { redirect } from "next/navigation";
import { useArticle, useArticles } from "@/hooks/useArticle";

export const generateStaticParams = async () => {
  const { articles } = await useArticles();
  return articles.map((article) => ({
    slug: article.fields.slug?.toString(),
  }));
};

type LandingPageProps = { params: { slug: string } };

const renderOption = {
  renderMark: {
    [MARKS.ITALIC]: (text: React.ReactNode) => (
      <span className="text-[1.25rem] italic first-letter:font-normal">
        {text}
      </span>
    ),
    [MARKS.CODE]: (code: React.ReactNode) => {
      const codeText = code as string;
      const languageSyntax = codeText.match(/(```)[\w]+(```)/);
      console.log(languageSyntax?.[0].replaceAll("```", ""));
      const codeOnly = codeText.replace(languageSyntax?.[0] as string, "");
      return (
        <SyntaxHighlighter
          language={languageSyntax?.[0].replaceAll("```", "")}
          style={docco}
        >
          {codeOnly}
        </SyntaxHighlighter>
      );
    },
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { title, description, file } = node.data.target.fields;
      return (
        <div className="float-right pl-8 inline md:max-w-lg xl:max-w-2xl py-4">
          <Image
            src={`https:${file.url}?r=15`}
            height={file.details.image.height}
            width={file.details.image.width}
            alt={title}
            blurDataURL={file.url + "?&q=8"}
            loading="lazy"
            placeholder="blur"
          />
          {description && (
            <span className="italic text-sm">
              {parse(description as string)}
            </span>
          )}
        </div>
      );
    },
    [BLOCKS.PARAGRAPH]: (_: any, children: any) => {
      return children.map((child: any) => {
        if (typeof child === "string") {
          return <p className="text-base md:text-2xl my-4">{children}</p>;
        }
        return (
          <div className="text-base md:text-xl my-4 font-serif">{child}</div>
        );
      });
    },
    [BLOCKS.TABLE]: (_: any, children: any) => {
      const tableHead = children[0];
      const tableBody = children.slice(1);
      return (
        <table className="table table-auto pt-4">
          <thead className="table-header-group text-primary bg-base-200">
            {tableHead}
          </thead>
          <tbody>{tableBody}</tbody>
        </table>
      );
    },
  },
};

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  const article = await useArticle(slug);
  if (!article) {
    redirect("/not-found");
  }

  const { title, seoPreviewImage, seoDescription } =
    article.fields as unknown as landingPageFieldsType;

  return {
    title: title as string,
    description: seoDescription as string,
    openGraph: {
      images: [`https:${seoPreviewImage.fields.file.url}`],
    },
    // twitter: {
    //   title: title as string,
    //   description: seoDescription as string,
    //   images: [`https:${seoPreviewImage.fields.file.url}`],
    //   creator: "@Exmaple_Twitter",
    // },
    // Reddit, LinkedIn to be tested
  };
}

const Article = async ({ params }: LandingPageProps) => {
  const slug = params.slug;
  const article = await useArticle(slug);
  if (!article) {
    redirect("/not-found");
  }
  const articleContent = documentToReactComponents(
    article.fields.content as Document,
    renderOption
  );

  return (
    <main className="flex flex-col items-center snap-y scroll-smooth gap-y-16 lg:gap-y-32 bg-base-100">
      <SectionContainer sectionName={params.slug}>
        <TitleText>{article.fields.title as string}</TitleText>
        <div className="text-primary-content">
          <div className="first-letter:text-6xl align-middle">
            {articleContent}
          </div>
        </div>
      </SectionContainer>
    </main>
  );
};

export default Article;
