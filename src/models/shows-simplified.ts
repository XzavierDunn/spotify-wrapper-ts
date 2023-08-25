import { z } from "zod";
import { Copyrights, ExternalUrls, Images } from "./shared";

const SimplifiedShow = z.object({
  available_markets: z.array(z.string()),
  copyrights: z.array(Copyrights),
  description: z.string(),
  html_description: z.string(),
  explicit: z.boolean(),
  external_urls: ExternalUrls,
  href: z.string(),
  id: z.string(),
  images: z.array(Images),
  is_externally_hosted: z.boolean(),
  languages: z.array(z.string()),
  media_type: z.string(),
  name: z.string(),
  publisher: z.string(),
  type: z.literal("show"),
  uri: z.string(),
  total_episodes: z.number(),
});

const SeveralSimplifiedShows = z.object({
  href: z.string(),
  limit: z.number(),
  next: z.string().nullable(),
  offset: z.number(),
  previous: z.string().nullable(),
  total: z.number(),
  items: z.array(SimplifiedShow).nullable().optional(),
});

export { SeveralSimplifiedShows };
