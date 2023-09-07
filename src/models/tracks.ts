import { z } from "zod";
import { Artist } from "./artists";
import { SimplifiedAlbum } from "./albums-simplified";
import { ExternalIds, ExternalUrls, LinkedFrom, Restrictions } from "./shared";

const Track = z.object({
  album: SimplifiedAlbum,
  artists: z.array(Artist),
  available_markets: z.array(z.string()).optional(),
  disc_number: z.number(),
  duration_ms: z.number(),
  explicit: z.boolean(),
  external_ids: ExternalIds,
  external_urls: ExternalUrls,
  href: z.string(),
  id: z.string(),
  is_playable: z.boolean().optional(),
  linked_from: LinkedFrom.optional(),
  restrictions: Restrictions.optional(),
  name: z.string(),
  popularity: z.number(),
  preview_url: z.string().nullable(),
  track_number: z.number(),
  type: z.string(),
  uri: z.string(),
  is_local: z.boolean(),
});

const MultipleTracks = z.object({
  tracks: z.array(Track),
});

const SavedTrack = z.object({
  added_at: z.string(),
  track: Track,
});

const PagesofTracks = z.object({
  href: z.string(),
  limit: z.number(),
  next: z.string().nullable(),
  offset: z.number(),
  previous: z.string().nullable(),
  total: z.number(),
  items: z.array(SavedTrack),
});

const FullTracks = z.object({
  href: z.string(),
  limit: z.number(),
  next: z.string().nullable(),
  offset: z.number(),
  previous: z.string().nullable(),
  total: z.number(),
  items: z.array(Track),
});

type TrackType = z.infer<typeof Track>;
type MultipleTracksType = z.infer<typeof MultipleTracks>;
type PagesofTracksType = z.infer<typeof PagesofTracks>;

export {
  Track,
  FullTracks,
  PagesofTracks,
  MultipleTracks,
  TrackType,
  MultipleTracksType,
  PagesofTracksType,
};
