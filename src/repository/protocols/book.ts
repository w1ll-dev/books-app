export interface Book {
  id: number;
  title: string;
  subtitle: string;
  authors: string[];
  description: string;
  imageLinks?: { smallThumbnail: string; thumbnail: string };
}
