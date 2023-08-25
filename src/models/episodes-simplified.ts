import { z } from "zod";
import { ExternalUrls, Images, Restrictions, Resume_Point } from "./shared";

const SimplifiedEpisode = z.object({
  audio_preview_url: z.string(),
  description: z.string(),
  html_description: z.string(),
  duration_ms: z.number(),
  explicit: z.boolean(),
  external_urls: ExternalUrls,
  href: z.string(),
  id: z.string(),
  images: z.array(Images),
  is_externally_hosted: z.boolean(),
  is_playable: z.boolean(),
  language: z.string(),
  languages: z.array(z.string()),
  name: z.string(),
  release_date: z.string(),
  release_date_precision: z.string(),
  resume_point: Resume_Point,
  type: z.literal("episode"),
  uri: z.string(),
  restrictions: Restrictions.optional(),
});

const SeveralSimplifiedEpisode = z.object({
  href: z.string(),
  limit: z.number(),
  next: z.string().nullable(),
  offset: z.number(),
  previous: z.string().nullable(),
  total: z.number(),
  items: z.array(SimplifiedEpisode),
});

export { SeveralSimplifiedEpisode };
