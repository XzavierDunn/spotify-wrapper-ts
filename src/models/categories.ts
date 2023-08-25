import { z } from "zod";
import { Images } from "./shared";

const CategoryItem = z.object({
  href: z.string(),
  icons: z.array(Images),
  id: z.string(),
  name: z.string(),
});

const Categories = z.object({
  href: z.string(),
  limit: z.number(),
  next: z.string().optional().nullable(),
  offset: z.number(),
  previous: z.string().optional().nullable(),
  total: z.number(),
  items: z.array(CategoryItem),
});

const SeveralCategories = z.object({
  categories: Categories,
});

type CategoriesType = z.infer<typeof Categories>;
type CategoryItemType = z.infer<typeof CategoryItem>;
type SeveralCategoriesType = z.infer<typeof SeveralCategories>;

export {
  Categories,
  CategoriesType,
  SeveralCategories,
  SeveralCategoriesType,
  CategoryItem,
  CategoryItemType,
};
