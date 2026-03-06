import getStrapiURL from "@/lib/get-strapi-url";
import { fetchAPI } from "@/lib/fetch-api";
import { featuredPostsQuery } from "./qs-queries";

const BASE_URL = getStrapiURL();

export async function getFeaturedPosts() {
  const path = "/api/posts";
  const url = new URL(path, BASE_URL);
  url.search = featuredPostsQuery
  return fetchAPI(url.href, { method: "GET" });
}
