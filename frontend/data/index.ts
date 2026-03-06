import { fetchAPI } from "@/lib/fetch-api";
import getStrapiURL from "@/lib/get-strapi-url";

const BASE_URL = getStrapiURL();

export async function getPosts() {
  const path = "/api/posts";
  const url = new URL(path, BASE_URL);
  return fetchAPI(url.href, { method: "GET" });
}
