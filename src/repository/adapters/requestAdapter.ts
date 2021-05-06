import { baseUrl } from "../constants";
import { ApiResponseProtocol } from "../protocols/apiResponse";

const booksPerPage = 12;

export async function requestAdapter(
  query: string,
  page: number
): Promise<ApiResponseProtocol> {
  const queryFixed = query.replace(/\s+/g, "+");

  const currentPage = `&startIndex=${
    page * booksPerPage
  }&maxResults=${booksPerPage}`;

  const response = await fetch(baseUrl + queryFixed + currentPage);
  const responseJson = await response.json();
  return responseJson as ApiResponseProtocol;
}
