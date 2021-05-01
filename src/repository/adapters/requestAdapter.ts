import { baseUrl } from "../constants";
import { ApiResponseProtocol } from "../protocols/apiResponse";

const booksPerPage = 12;

export async function requestAdapter(
  query: string,
  page: number
): Promise<ApiResponseProtocol> {
  const currentPage = `&startIndex=${
    page * booksPerPage
  }&maxResults=${booksPerPage}`;

  const response = await fetch(baseUrl + query + currentPage);
  const responseJson = await response.json();
  return responseJson as ApiResponseProtocol;
}
