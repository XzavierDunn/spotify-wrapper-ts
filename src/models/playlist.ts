import { z } from "zod";
import { ExternalUrls, Followers, Images } from "./shared";
import { PlaylistTracks } from "./playlist-track";
import { SeveralSimplifiedPlaylists } from "./playlists-simplified";

const Snapshot = z.object({ snapshot_id: z.string() });

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

const PagedPlaylists = z.object({
  message: z.string().optional().nullable(),
  playlists: SeveralSimplifiedPlaylists,
});

type SnapshotType = z.infer<typeof Snapshot>;
type PlaylistType = z.infer<typeof Playlist>;
type PagedPlaylistsType = z.infer<typeof PagedPlaylists>;

export {
  Playlist,
  PlaylistType,
  Snapshot,
  SnapshotType,
  PagedPlaylists,
  PagedPlaylistsType,
};
