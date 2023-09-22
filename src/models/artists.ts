import { z } from "zod";
import { ExternalUrls, Followers, Images, cursors } from "./shared";

const Artist = z.object({
  external_urls: ExternalUrls,
  followers: Followers,
  genres: z.array(z.string()),
  href: z.string(),
  id: z.string(),
  images: z.array(Images),
  name: z.string(),
  popularity: z.number(),
  type: z.string(),
  uri: z.string(),
});

const SeveralArtists = z.object({
  artists: z.array(Artist),
});

const FullArtists = z.object({
  href: z.string(),
  limit: z.number(),
  next: z.string().nullable(),
  offset: z.number(),
  previous: z.string().nullable(),
  total: z.number(),
  items: z.array(Artist),
});

const PagedArtists = z.object({
  artists: FullArtists,
});

type ArtistType = z.infer<typeof Artist>;
type PagedArtistsType = z.infer<typeof PagedArtists>;
type SeveralArtistsType = z.infer<typeof SeveralArtists>;

export {
  Artist,
  SeveralArtists,
  FullArtists,
  PagedArtists,
  ArtistType,
  SeveralArtistsType,
  PagedArtistsType,
};
