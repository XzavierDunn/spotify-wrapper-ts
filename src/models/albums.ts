import { z } from "zod";
import {
  ExternalIds,
  ExternalUrls,
  Images,
  Restrictions,
  Copyrights,
} from "./shared";
import { Artist } from "./artists";
import { SimplifiedTracks } from "./tracks-simplified";

const Album = z.object({
  album_type: z.string(),
  total_tracks: z.number(),
  available_markets: z.array(z.string()).optional(),
  external_urls: ExternalUrls,
  href: z.string(),
  id: z.string(),
  images: z.array(Images),
  name: z.string(),
  release_date: z.string(),
  release_date_precision: z.string(),
  restrictions: Restrictions.optional(),
  type: z.string(),
  uri: z.string(),
  copyrights: z.array(Copyrights).optional(),
  external_ids: ExternalIds.optional(),
  genres: z.array(z.string()).optional(),
  label: z.string().optional(),
  popularity: z.number().optional(),
  artists: z.array(Artist),
  tracks: SimplifiedTracks,
});

const SeveralAlbums = z.object({
  albums: z.array(Album),
});

type AlbumType = z.infer<typeof Album>;
type SeveralAlbumsType = z.infer<typeof SeveralAlbums>;

export { Album, SeveralAlbums, AlbumType, SeveralAlbumsType };
