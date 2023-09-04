import { z } from "zod";
import { Copyrights, ExternalUrls, Images } from "./shared";
import { SeveralSimplifiedEpisode } from "./episodes-simplified";
import { SimplifiedShow } from "./shows-simplified";

const Show = z.object({
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
  episodes: SeveralSimplifiedEpisode,
});

const SavedShowObject = z.object({
  added_at: z.string(),
  show: SimplifiedShow,
});

const PagesofShows = z.object({
  href: z.string(),
  limit: z.number(),
  next: z.string().nullable(),
  offset: z.number(),
  previous: z.string().nullable(),
  total: z.number(),
  items: z.array(SavedShowObject).nullable().optional(),
});

type ShowType = z.infer<typeof Show>;
type PagesofShowsType = z.infer<typeof PagesofShows>;

export { Show, ShowType, PagesofShows, PagesofShowsType };
