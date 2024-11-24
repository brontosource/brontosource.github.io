import { ContentfulClient } from "@/app/page";

export const useArticles = async  () => {
    const {items} = await ContentfulClient.getEntries({ content_type: "articles" });

    return {
        articles: items,
    };
}

export const useArticle = async  (slug: string) => {
    const { items } = await ContentfulClient.getEntries({
        content_type: "articles",
        "fields.slug": slug,
      });

    if (items.length === 0) {
        return null;
    }
    return items[0];
}
