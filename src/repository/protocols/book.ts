export interface Book {
  id: string;
  title: string;
  subtitle: string;
  authors: string[];
  description: string;
  imageLinks?: { smallThumbnail: string; thumbnail: string };
}
