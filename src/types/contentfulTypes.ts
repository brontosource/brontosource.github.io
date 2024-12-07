import { Document } from "@contentful/rich-text-types";

export type landingPageFieldsType = {
  title: string;
  slug: string;
  seoDescription: string;
  seoPreviewImage: seoPreviewImageType;
  article: Document;
};

export type seoPreviewImageType = {
  fields: imageFields;
};

type imageFields = {
  title: string;
  file: {
    url: string;
    details: [Object];
    fileName: string;
    contentType: string;
  };
};
