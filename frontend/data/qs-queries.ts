import qs from "qs";

export const featuredPostsQuery = qs.stringify(
  {
    filters: {
      featured: {
        $eq: true,
      },
    },
    populate: ["thumbnail", "category", "author"],
  },
  {
    encodeValuesOnly: true,
  },
);
