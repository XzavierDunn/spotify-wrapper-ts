import { z } from "zod";
import { SimplifiedAlbum } from "./albums-simplified";
import { Artist } from "./artists";
import {
  ExternalIds,
  ExternalUrls,
  Images,
  LinkedFrom,
  Restrictions,
  Resume_Point,
} from "./shared";
import { SimplifiedShow } from "./shows-simplified";

const TrackOrEpisodeObject = z.object({
  album: SimplifiedAlbum.optional(),
  artists: z.array(Artist).optional(),
  available_markets: z.array(z.string()).optional(),
  disc_number: z.number().optional(),
  duration_ms: z.number().optional(),
  explicit: z.boolean().optional(),
  external_ids: ExternalIds.optional(),
  external_urls: ExternalUrls.optional(),
  href: z.string().optional(),
  id: z.string().optional(),
  is_playable: z.boolean().optional(),
  linked_from: LinkedFrom.optional(),
  restrictions: Restrictions.optional(),
  name: z.string().optional(),
  popularity: z.number().optional(),
  preview_url: z.string().optional().nullable(),
  track_number: z.number().optional(),
  type: z.string().optional(),
  uri: z.string().optional(),
  is_local: z.boolean().optional(),
  audio_preview_url: z.string().optional(),
  description: z.string().optional(),
  html_description: z.string().optional(),
  images: z.array(Images).optional(),
  is_externally_hosted: z.boolean().optional(),
  language: z.string().optional(),
  languages: z.array(z.string()).optional(),
  release_date: z.string().optional(),
  release_date_precision: z.string().optional(),
  resume_point: Resume_Point.optional(),
  show: SimplifiedShow.optional(),
});

const Queue = z.object({
  currently_playing: TrackOrEpisodeObject,
  queue: z.array(TrackOrEpisodeObject),
});

type QueueType = z.infer<typeof Queue>;

export { Queue, QueueType, TrackOrEpisodeObject };
