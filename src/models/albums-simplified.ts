import { z } from "zod";
import {
  Copyrights,
  ExternalIds,
  ExternalUrls,
  Images,
  Restrictions,
} from "./shared";
import { SimplifiedArtist } from "./artists-simplified";

const SimplifiedAlbum = z.object({
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
  album_group: z.string().optional(),
  artists: z.array(SimplifiedArtist),
});

const SeveralSimplifiedAlbums = z.object({
  href: z.string().optional(),
  limit: z.number().optional(),
  next: z.string().optional().nullable(),
  offset: z.number().optional(),
  previous: z.string().optional().nullable(),
  total: z.number().optional(),
  items: z.array(SimplifiedAlbum).optional(),
});

const NewReleases = z.object({ albums: SeveralSimplifiedAlbums });

type SeveralSimplifiedAlbumsType = z.infer<typeof SeveralSimplifiedAlbums>;
type NewReleasesType = z.infer<typeof NewReleases>;

export {
  SimplifiedAlbum,
  SeveralSimplifiedAlbums,
  NewReleases,
  SeveralSimplifiedAlbumsType,
  NewReleasesType,
};
