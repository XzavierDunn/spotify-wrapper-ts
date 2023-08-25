import { z } from "zod";
import { ExternalUrls, Followers, Images } from "./shared";

const Owner = z.object({
  external_urls: ExternalUrls,
  followers: Followers.optional(),
  href: z.string(),
  id: z.string(),
  type: z.string(),
  uri: z.string(),
  display_name: z.string(),
});

const SimplifiedPlaylist = z.object({
  collaborative: z.boolean(),
  description: z.string(),
  external_urls: ExternalUrls,
  href: z.string(),
  id: z.string(),
  images: z.array(Images),
  name: z.string(),
  owner: Owner,
  public: z.boolean().nullable(),
  snapshot_id: z.string(),
  tracks: z.object({ href: z.string(), total: z.number() }),
  type: z.string(),
  uri: z.string(),
});

const SeveralSimplifiedPlaylists = z.object({
  href: z.string().optional(),
  limit: z.number().optional(),
  next: z.string().optional().nullable(),
  offset: z.number().optional(),
  previous: z.string().optional().nullable(),
  total: z.number().optional(),
  items: z.array(SimplifiedPlaylist).optional(),
});

export { SeveralSimplifiedPlaylists };
