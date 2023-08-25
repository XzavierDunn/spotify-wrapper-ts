import { z } from "zod";
import { Copyrights, ExternalUrls, Images, authors, narrators } from "./shared";
import { SimplifiedChapterObject } from "./audiobooks-simplified";

const chapters = z.object({
  href: z.string(),
  limit: z.number(),
  next: z.string().optional().nullable(),
  offset: z.number(),
  previous: z.string().optional().nullable(),
  total: z.number(),
  items: SimplifiedChapterObject,
});

const Audiobook = z.object({
  authors: authors,
  available_markets: z.array(z.string()),
  copyrights: z.array(Copyrights),
  description: z.string(),
  html_description: z.string(),
  edition: z.string(),
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
  total_chapters: z.number(),
  chapters: chapters,
});

const SeveralAudiobooks = z.object({
  audiobooks: z.array(Audiobook),
});

type AudiobookType = z.infer<typeof Audiobook>;
type SeveralAudiobookType = z.infer<typeof SeveralAudiobooks>;
type ChaptersType = z.infer<typeof chapters>;

export {
  Audiobook,
  AudiobookType,
  SeveralAudiobooks,
  SeveralAudiobookType,
  chapters,
  ChaptersType,
};
