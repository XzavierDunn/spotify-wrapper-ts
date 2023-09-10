import { z } from "zod";
import { SimplifiedArtist } from "./artists-simplified";
import { ExternalUrls, LinkedFrom, Restrictions } from "./shared";

const SimplifiedTrack = z.object({
  artists: z.array(SimplifiedArtist).optional(),
  available_markets: z.array(z.string()).optional(),
  disc_number: z.number().optional(),
  duration_ms: z.number().optional(),
  explicit: z.boolean().optional(),
  external_urls: ExternalUrls.optional(),
  href: z.string().optional(),
  id: z.string().optional(),
  is_playable: z.boolean().optional(),
  linked_from: LinkedFrom.optional(),
  restrictions: Restrictions.optional(),
  name: z.string().optional(),
  preview_url: z.string().nullable(),
  track_number: z.number().optional(),
  type: z.string().optional(),
  uri: z.string().optional(),
  is_local: z.boolean().optional(),
});

const SimplifiedTracks = z.object({
  href: z.string(),
  limit: z.number(),
  next: z.string().nullable(),
  offset: z.number(),
  previous: z.string().nullable(),
  total: z.number(),
  items: z.array(SimplifiedTrack),
});

type SimplifiedTracksType = z.infer<typeof SimplifiedTracks>;

export { SimplifiedTrack, SimplifiedTracks, SimplifiedTracksType };
