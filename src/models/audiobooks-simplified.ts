import { z } from "zod";
import {
  Copyrights,
  ExternalUrls,
  Images,
  Restrictions,
  authors,
  narrators,
} from "./shared";

const resume_point = z.object({
  fully_played: z.boolean(),
  resume_position_ms: z.number(),
});

const SimplifiedChapterObject = z.array(
  z.object({
    audio_preview_url: z.string().nullable(),
    available_markets: z.array(z.string()),
    chapter_number: z.number(),
    description: z.string(),
    html_description: z.string(),
    duration_ms: z.number(),
    explicit: z.boolean(),
    external_urls: ExternalUrls,
    href: z.string(),
    id: z.string(),
    images: z.array(Images),
    is_playable: z.boolean().optional(),
    languages: z.array(z.string()),
    name: z.string(),
    release_date: z.string(),
    release_date_precision: z.string(),
    resume_point: resume_point,
    type: z.string(),
    uri: z.string(),
    restrictions: Restrictions.optional(),
  })
);

const SimplifiedAudiobook = z.object({
  authors: authors,
  available_markets: z.array(z.string()).optional(),
  copyrights: z.array(Copyrights),
  description: z.string(),
  html_description: z.string(),
  edition: z.string().nullable(),
  explicit: z.boolean(),
  external_urls: ExternalUrls,
  href: z.string(),
  id: z.string(),
  images: z.array(Images),
  languages: z.array(z.string()),
  media_type: z.string(),
  name: z.string(),
  narrators: narrators,
  publisher: z.string(),
  type: z.string(),
  uri: z.string(),
  total_chapters: z.number().nullable(),
});

const SeveralSimplifiedAudiobooks = z.object({
  href: z.string(),
  limit: z.number(),
  next: z.string().optional().nullable(),
  offset: z.number(),
  previous: z.string().optional().nullable(),
  total: z.number(),
  items: z.array(SimplifiedAudiobook),
});

type SimplifiedAudiobookType = z.infer<typeof SimplifiedAudiobook>;
type SeveralSimplifiedAudiobooksType = z.infer<
  typeof SeveralSimplifiedAudiobooks
>;

export {
  SimplifiedAudiobook,
  SimplifiedChapterObject,
  SimplifiedAudiobookType,
  SeveralSimplifiedAudiobooks,
  SeveralSimplifiedAudiobooksType,
};
