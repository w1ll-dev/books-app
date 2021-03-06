import { requestAdapter } from "./adapters/requestAdapter";
import { Book } from "./protocols";

interface Response {
  volumeInfo: Book;
  id: number;
}

export async function getBooks(query: string, page: number): Promise<Book[]> {
  try {
    const { items } = await requestAdapter(query, page);
    const booksList = items.map<Book>(
      ({ volumeInfo, id }: Response) =>
        ({
          id: String(id),
          title: volumeInfo.title,
          subtitle: volumeInfo.subtitle,
          authors: volumeInfo.authors,
          description: volumeInfo.description,
          imageLinks: volumeInfo.imageLinks,
        } as Book)
    );

    return booksList;
  } catch (error) {
    throw new Error(error);
  }
}
