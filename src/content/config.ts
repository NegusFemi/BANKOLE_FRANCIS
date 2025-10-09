import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.string(), // Add this line
    video: z.string(), 
    content: z.string().optional(),
  }),
});

export const collections = {
  blog,
};
