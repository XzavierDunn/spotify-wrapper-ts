import { z } from "zod";
import { Artist } from "./artists";
import { SimplifiedAlbum } from "./albums-simplified";
import { ExternalIds, ExternalUrls, LinkedFrom, Restrictions } from "./shared";

const Track = z.object({
  album: SimplifiedAlbum,
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
});

const Tracks = z.object({
  tracks: z.array(Track),
});

const FullTracks = z.object({
  href: z.string().optional(),
  limit: z.number().optional(),
  next: z.string().optional().nullable(),
  offset: z.number().optional(),
  previous: z.string().optional().nullable(),
  total: z.number().optional(),
  items: z.array(Track).optional(),
});

type TrackType = z.infer<typeof Track>;
type TracksType = z.infer<typeof Tracks>;

export { Track, Tracks, FullTracks, TrackType, TracksType };
