import { z } from "zod";
import { ExternalUrls, Images, Restrictions, Resume_Point } from "./shared";
import { SimplifiedAudiobook } from "./audiobooks-simplified";

const Chapter = z.object({
  audio_preview_url: z.string().nullable(),
  available_markets: z.array(z.string()).optional(),
  chapter_number: z.number(),
  description: z.string(),
  html_description: z.string(),
  duration_ms: z.number(),
  explicit: z.boolean(),
  external_urls: ExternalUrls,
  href: z.string(),
  id: z.string(),
  images: z.array(Images),
  is_playable: z.boolean(),
  languages: z.array(z.string()),
  name: z.string(),
  release_date: z.string(),
  release_date_precision: z.string(),
  resume_point: Resume_Point,
  type: z.string(),
  uri: z.string(),
  restrictions: Restrictions,
  audiobook: SimplifiedAudiobook,
});

const SeveralChapters = z.object({
  chapters: z.array(Chapter),
});

type ChapterType = z.infer<typeof Chapter>;
type SeveralChaptersType = z.infer<typeof SeveralChapters>;

export { Chapter, ChapterType, SeveralChapters, SeveralChaptersType };
