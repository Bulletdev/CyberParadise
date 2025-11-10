export interface ArticleSection {
  title?: string;
  paragraphs?: string[];
  items?: string[];
}

export interface ArticleSource {
  label?: string;
  url?: string;
}

export interface FullArticle {
  title: string;
  body: string[];
  date?: string;
  sections?: ArticleSection[];
  sources?: ArticleSource[];
}