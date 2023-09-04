import { z } from "zod";
import { ExternalUrls, Images, Restrictions, Resume_Point } from "./shared";
import { SimplifiedShow } from "./shows-simplified";
import { SimplifiedEpisode } from "./episodes-simplified";

const Episode = z.object({
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
  type: z.string(),
  uri: z.string(),
  restrictions: Restrictions.optional(),
  show: SimplifiedShow,
});

const SavedEpisode = z.object({
  added_at: z.string(),
  episode: Episode,
});

const EpisodePages = z.object({
  href: z.string(),
  limit: z.number(),
  next: z.string().optional().nullable(),
  offset: z.number(),
  previous: z.string().optional().nullable(),
  total: z.number(),
  items: z.array(SavedEpisode),
});

const PagesofEpisodes = z.object({
  href: z.string(),
  limit: z.number(),
  next: z.string().optional().nullable(),
  offset: z.number(),
  previous: z.string().optional().nullable(),
  total: z.number(),
  items: z.array(SimplifiedEpisode),
});

const SeveralEpisodes = z.object({
  episodes: z.array(Episode),
});

type EpisodeType = z.infer<typeof Episode>;
type EpisodesType = z.infer<typeof EpisodePages>;
type SeveralEpisodesType = z.infer<typeof SeveralEpisodes>;
type PagesofEpisodesType = z.infer<typeof PagesofEpisodes>;

export {
  Episode,
  EpisodeType,
  SeveralEpisodes,
  SeveralEpisodesType,
  EpisodePages,
  EpisodesType,
  PagesofEpisodes,
  PagesofEpisodesType,
};
