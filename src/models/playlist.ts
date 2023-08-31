import { z } from "zod";
import { ExternalUrls, Followers, Images } from "./shared";
import { PlaylistTracks } from "./playlist-track";

const Owner = z.object({
  external_urls: ExternalUrls,
  followers: Followers.optional(),
  href: z.string(),
  id: z.string(),
  type: z.string(),
  uri: z.string(),
  display_name: z.string(),
});

const Playlist = z.object({
  collaborative: z.boolean(),
  description: z.string(),
  external_urls: ExternalUrls,
  followers: Followers,
  href: z.string(),
  id: z.string(),
  images: z.array(Images),
  name: z.string(),
  owner: Owner,
  public: z.boolean(),
  snapshot_id: z.string(),
  tracks: PlaylistTracks,
  type: z.string(),
  uri: z.string(),
});

type PlaylistType = z.infer<typeof Playlist>;

export { Playlist, PlaylistType };
