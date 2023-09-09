import { z } from "zod";
import { ExternalUrls, Followers } from "./shared";
import { TrackOrEpisodeObject } from "./queue";

const added_by = z.object({
  external_urls: ExternalUrls,
  followers: Followers.optional(),
  href: z.string(),
  id: z.string(),
  type: z.string(),
  uri: z.string(),
});

const PlaylistTrackObject = z.object({
  added_at: z.string().optional(),
  added_by: added_by.optional(),
  is_local: z.boolean().optional(),
  track: TrackOrEpisodeObject,
});

const PlaylistTracks = z.object({
  href: z.string().optional(),
  limit: z.number().optional(),
  next: z.string().optional().nullable(),
  offset: z.number().optional(),
  previous: z.string().optional().nullable(),
  total: z.number().optional(),
  items: z.array(PlaylistTrackObject).optional(),
});

type PlaylistTracksType = z.infer<typeof PlaylistTracks>;

export { PlaylistTracks, PlaylistTracksType };
